import { StatusCodes } from 'http-status-codes'
import {BadRquestError, NotFoundError} from '../errors/index.js'
import Article from '../models/article-models.js'
import checkPermissions from '../utils/checkPermissions.js'
import mongoose from 'mongoose'
import moment from 'moment'
// import generateUploadURL from '../s3.js'
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import dotenv from 'dotenv'
import crypto from 'crypto'
import sharp from 'sharp'
dotenv.config()

const randomBytesImg = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')
const bucketRegion = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const bucketName = process.env.AWS_BUCKET_NAME
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY


const s3 = new S3Client({
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
    region: bucketRegion
})

const showArticles = async (req, res) => {
    const queryObject = {
        createdBy: req.user.userID
    }
     // no await here because we want to chain sort conditions for result
    let result = Article.find(queryObject)
    result = result.sort('-createdAt')
    // wait for result
    const articles = await result
    //const totalArticles = await Article.countDocuments(queryObject)
    res.status(StatusCodes.OK).json(articles)
}
const showAllArticles = async (req, res) => {

    let result = Article.find()
    result = result.sort('-createdAt')
   //const articles = await result

    // pagination
    const page = Number(req.query.page) || 1
    const limit =  Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)
    // wait for result
    const articles = await result
    const totalArticles = await Article.countDocuments()
    const numOfPages = Math.ceil(totalArticles/limit)
    res.status(StatusCodes.OK).json({articles, totalArticles: totalArticles, numOfPages: numOfPages})
}
const s3PutRequest = async (req, res, imageURL) => {
    // const buffer = await sharp(req.file.buffer)
    //                     .resize(
    //                         {
    //                             height: 1920,
    //                             width: 1080,
    //                             fit: 'contain'
    //                         }
    //                     )
    //                     .toBuffer()
    const buffer = req.file.buffer
    const params = {
        Bucket: bucketName,
        Key: imageURL,
        Body: buffer,
        ContentType: req.file.mimetype
    }
    const command = new PutObjectCommand(params)
    await s3.send(command)
}
const createArticle = async (req, res) => {
    let url = ""
    if (req.file) {
        const imageURL = randomBytesImg()
        await s3PutRequest(req, res, imageURL)
        const getObjectParam = {
            Bucket: bucketName,
            Key: imageURL
        }
        const get_command = new GetObjectCommand(getObjectParam)
        // url = await getSignedUrl(s3, get_command) // {expiresIn: 3600} setup 
        url = "https://yale-hashchain-bucket-imgs.s3.us-east-2.amazonaws.com/" + imageURL
    }
    const { articleTitle: title, articleDesc: description } = req.body
    if (!title || !description) {
        throw new BadRquestError("Please provide all values")
    }
    req.body.createdBy = req.user.userID
    const article = await Article.create({...req.body, articleImg:url})
    res.status(StatusCodes.CREATED).json({article})
}

const showArticle = async (req, res) => {
    const {id: articleID} = req.params
    const article = await Article.findOne({_id: articleID})
    res.status(StatusCodes.OK).json(article)
}
const deleteBucket = async (imageName) => {
    const params = {
        Bucket: bucketName,
        Key: imageName
    }
    const command = new DeleteObjectCommand(params)
    await s3.send(command)
}
const deleteArticle = async (req, res) => {
    const {id: articleId} = req.params
    const article = await Article.findOne({_id: articleId})
    if (!article) {
        throw new NotFoundError(`No article with id ${articleId}`)
    }
    // check permission
    checkPermissions(req.user, article.createdBy) 
    const imageName = article.articleImg.split('.com/')[1]

    if (imageName) {
        await deleteBucket(imageName)
    }
    await article.deleteOne();
    
    res.status(StatusCodes.OK).json({msg: "Success! article removed"})
}

// const s3url = async (req, res) => {
//     const url = await generateUploadURL()
//     console.log(url);
//     res.status(StatusCodes.OK).json({url})
// }

const updateArticle = async (req, res) => {
    const {id: articleId} = req.params
    const { articleTitle: title, articleDesc: description, articleImg} = req.body
    let newImage = ""
    
    const article = await Article.findOne({_id: articleId})
    if (!article) {
        throw new NotFoundError(`No job with id ${articleId}`)
    }
    
    // check permission
    checkPermissions(req.user, article.createdBy) 
    // use save method to update if having hooks in article model (eg, password...)
    if (req.file) {
        if (article.articleImg) {
            const imageName = article.articleImg.split('?')[0].split('.com/')[1]
            deleteBucket(imageName)
        }
        const imageURL = randomBytesImg()
        await s3PutRequest(req, res, imageURL)
        const getObjectParam = {
            Bucket: bucketName,
            Key: imageURL
        }
        const get_command = new GetObjectCommand(getObjectParam)
        newImage = await getSignedUrl(s3, get_command)
    }
    if (!title || description == '<p><br></p>') {
        throw new BadRquestError("Please provide all values")
    }
    const updatedArticle = await Article.findOneAndUpdate(
                                        {_id: articleId}, 
                                        
                                        {...req.body,articleImg: newImage? newImage : article.articleImg},
                                        {
                                            new: true,
                                            runValidators: true,
                                        })
    res.status(StatusCodes.OK).json({updatedArticle})
}
export {showArticles, createArticle, showArticle, deleteArticle, updateArticle, showAllArticles}