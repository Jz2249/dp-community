import express from 'express'
const router = express.Router()

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: 'Too many request from this IP, please try again after 15 minutes.'

})
import { Login, Register, UpdateUser } from '../controller/auth-controller.js'
import authenticateUser from '../middleware/auth.js'
// import testUser from '../middleware/testUser.js'

router.route('/login').post(apiLimiter, Login)
router.route('/register').post(apiLimiter, Register)
router.route('/updateUser').patch(authenticateUser, UpdateUser)

export default router