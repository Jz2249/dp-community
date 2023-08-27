import express from 'express'
const router = express.Router()
import authenticateUser from '../middleware/auth.js'
import multer from 'multer'
import {showArticles, createArticle, showArticle, updateArticle, deleteArticle, showAllArticles }from '../controller/articles-controller.js'


const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.route('/').get(authenticateUser, showArticles)
router.route('/all-articles').get(showAllArticles)
router.route('/:id').get( showArticle).patch(authenticateUser,upload.single('articleImg'),updateArticle).delete(authenticateUser, deleteArticle)
router.route('/').post(authenticateUser, upload.single('articleImg'), createArticle)

export default router