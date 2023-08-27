import express from 'express'
const router = express.Router()

import multer from 'multer'
import { createComment, deleteComment, getAllComments, showAllCommentsInCommunity}from '../controller/comment-controller.js'
import authenticateUser from '../middleware/auth.js'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.route('/:postId/comments').get( getAllComments)
router.route('/comments/community').get( showAllCommentsInCommunity)
// router.route('/:commentId/reply').put(addReply)
// router.route('/:commentId/reply/:replyId').put(addReply)
router.route('/:postId/replies/:commentId').delete(authenticateUser, deleteComment)
// router.route('/all-articles').get(showAllArticles)
// router.route('/:id').get(showArticle).patch(upload.single('articleImg'),updateArticle).delete(deleteArticle)
router.route('/:postId/createComment').post(authenticateUser, upload.single('articleImg'), createComment)

export default router