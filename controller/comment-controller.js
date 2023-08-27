import { StatusCodes } from 'http-status-codes'
import {BadRquestError, NotFoundError} from '../errors/index.js'
import Comment from '../models/comments-models.js'
import User from '../models/user-model.js'
import checkPermissions from '../utils/checkPermissions.js'
import mongoose from 'mongoose'
import moment from 'moment'
// import generateUploadURL from '../s3.js'
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import dotenv from 'dotenv'
import crypto from 'crypto'
import sharp from 'sharp'


const createComment = async (req, res) => {

    const id = req.params?.postId
    const {comment, username, respondTo, respondToUserName} = req?.body
    try {
        if (id) {
            const createdComment = await Comment.create({
                postId: id,
                createdBy: req.user.userID ,
                createdByUserName: username,
                content: comment,
                respondTo,
                respondToUserName
            })
            // console.log(createdComment)
            res.status(StatusCodes.CREATED).json({createdComment})
        } else {
            throw new NotFoundError("Comment with this post id not found")
        }
    } catch (error) {
        throw new BadRquestError(error)
    }
}

const getAllComments = async (req, res) => {
    const queryObject = {
        postId: req.params?.postId
    }
    // no await here because we want to chain sort conditions for result
    try {
        if (queryObject) {
            let result = Comment.find(queryObject)
            result = result.sort('-createdAt')
            // wait for result
            const comments = await result
            //const totalArticles = await Article.countDocuments(queryObject)
            // let replies = comments?.map((c) => {
            //     return c?.replies.length > 0 ? c?.replies?.reverse() : []
            // })
            // const new_comments = [...comments, replies]
            res.status(StatusCodes.OK).json({comments})
        } else {
            throw new NotFoundError("Comment with this post id not found")
        }
        
    } catch (error) {
        throw new BadRquestError(error)
    }
    
}
const showAllCommentsInCommunity = async (req, res) => {
    const articles = req.body.all_articles
    // no await here because we want to chain sort conditions for result
    try {
        if (articles) {
            let arr = []
            for (const article of articles) {
                const articleId = article._id
                const result = Comment.find({ articleId })
                result = result.sort('-createdAt')
                const comments = await result
                arr.push(comments)
                res.status(StatusCodes.OK).json({comments})
            }
            
        } else {
            throw new NotFoundError("Comment with this post id not found")
        }
        
    } catch (error) {
        throw new BadRquestError(error)
    }
    
}


// const addReply = async (req, res) => {
//     const comment_id = req.params?.commentId;     // Main comment _id
//     const parent_reply_id = req.params?.replyId;  // Parent reply _id
//     try {
//         if (comment_id) {
//             const user = await User.findById(req.user.userID);
//             const nestedReply = {
//                 commentId: comment_id,
//                 createdBy: req.user.userID,
//                 comment: req.body.comment,
//                 createdByUserName: user.name
//             };
//             let queryObject1 = { _id: comment_id }
//             let queryObject2 = {$push: { replies : nestedReply }}
//             if (parent_reply_id) {
//                 queryObject1 = { _id: comment_id, 'replies._id': parent_reply_id }
//                 queryObject2 = {$push: { 'replies.$.replies': nestedReply }}
//             }
//             const updatedComment = await Comment.findOneAndUpdate(
//                 queryObject1, // Find the main comment and its parent reply
//                 queryObject2,     // Push the nested reply into the parent reply's replies array
//                 { new: true }
//             );
//             if (!updatedComment) {
//                 throw new NotFoundError('Main comment or parent reply not found');
//             }
            
//             res.status(StatusCodes.CREATED).json({ updatedComment });
//         } else {
//             throw new NotFoundError('Main comment or parent reply not found');
//         }
//     } catch (error) {
//         throw new BadRquestError(error);
//     }
// };


const deleteReply = async (commentId) => {
    const nestedReplies = await Comment.find({ respondTo: commentId });

    for (const nestedReply of nestedReplies) {
        await deleteReply(nestedReply._id);
    }

    await Comment.deleteOne({ _id: commentId });
};

const deleteComment = async (req, res) => {
    const commentId = req.params.commentId;
    try {
        const comment = await Comment.findOne({ _id: commentId });
        if (!comment) {
            throw new NotFoundError(`No comment with id ${commentId}`);
        }
        // check permission
        checkPermissions(req.user, comment.createdBy);

        await deleteReply(commentId);

        res.status(StatusCodes.OK).json({ msg: "Success! comment(s) removed" });
    } catch (error) {
        throw new BadRquestError(error);
    }
};

export {createComment, getAllComments, deleteComment, showAllCommentsInCommunity}