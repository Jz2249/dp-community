import Like from '../models/like-models.js'
import DisLike from '../models/dislike-models.js'
import { StatusCodes } from 'http-status-codes'
const getLikes = async (req, res) => {
    const {commentId, userId, userName, articleId} = req.body
    let queryObject = {}
    if (articleId) {
       queryObject = {
            articleId,
        }
    } else {
        queryObject = {
            commentId, 
        }
    }
    let result = await Like.find(queryObject)
    res.status(StatusCodes.OK).json({data:result, success:"get data successfully"})
}
const getDisLikes = async (req, res) => {
    const {commentId, userName, articleId} = req.body
    let queryObject = {}
    if (articleId) {
        queryObject = {
            articleId
        }
    } else {
        queryObject = {
            commentId, 
        }
    }
    let result = await DisLike.find(queryObject)
    res.status(StatusCodes.OK).json({data:result, success: "get dislikes successfully"})
}
const upLike = async (req, res) => {
    const {commentId, userId, articleId, userName} = req.body
    let queryObject = {}
    if (articleId) {
        queryObject = {
            userId,
            articleId,
            userName
        }
    } else {
        queryObject = {
            commentId, 
            userId,
            userName

        }
    }
    const like = new Like(queryObject)
    await like.save()
    await DisLike.findOneAndDelete(queryObject)
    res.status(StatusCodes.OK).json({success: "up like successfully"})
}
const unLike = async (req, res) => {
    const {commentId, userId, articleId} = req.body
    let queryObject = {}
    if (articleId) {
        queryObject = {
            userId,
            articleId
        }
    } else {
        queryObject = {
            userId,
            commentId,
        }
    }
    console.log(queryObject)
    await Like.findOneAndDelete(queryObject)
    res.status(200).json({success: "unlike successfully" })
}
const unDisLike = async (req, res) => {
    const {commentId, userId, articleId} = req.body
    let queryObject = {}
    if (articleId) {
        queryObject = {
            userId, 
            articleId,
        }
    } else {
        queryObject = {
            commentId, 
            userId,
        }
    }
    await DisLike.findOneAndDelete(queryObject)
    res.status(200).json({success: "unDislike successfully" })

}
const upDisLike = async (req, res) => {
    const {commentId, userId, userName, articleId} = req.body
    let queryObject = {}
    if (articleId) {
        queryObject = {
            userId, 
            articleId,
            userName
        }
    } else {
        queryObject = {
            commentId, 
            userId, 
            userName,
        }
    }
    const dislike = new DisLike(queryObject)
    await dislike.save()
    await Like.findOneAndDelete(queryObject)
    res.status(StatusCodes.OK).json({success: "up dislike successfully"})
}
export {getLikes, upLike, getDisLikes, unLike, unDisLike, upDisLike}