import express from 'express'
import { getDisLikes, getLikes, unDisLike, unLike, upDisLike, upLike } from '../controller/like-controller.js'
const router = express.Router()
import Like from '../models/like-models.js'
import DisLike from '../models/dislike-models.js'
import authenticateUser from '../middleware/auth.js'
router.route("/getLikes").post(getLikes)
router.route("/addLike").post(authenticateUser, upLike)
router.route("/removeLike").post(authenticateUser, unLike)
router.route("/addDisLike").post(authenticateUser, upDisLike)
router.route("/removeDisLike").post(authenticateUser, unDisLike)
router.route("/getDisLikes").post( getDisLikes)




export default router