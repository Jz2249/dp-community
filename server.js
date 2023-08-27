
import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'

import {dirname} from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

// security
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

import connectDB from './db/connect.js'

// routers
import authRouter from './router/auth-routes.js'
import jobsRouter from './router/job-routes.js'
import articleRouter from './router/articles-routes.js'
import commentRouter from './router/comments-routes.js'
import likesRouter from './router/like-routes.js'
// import generateUploadURL from './s3.js'
import { StatusCodes } from 'http-status-codes'

if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
// Deployed
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/build'))) // access to our public static assets (favcoin...etc)

// Deployed: security
app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

app.get('/api/v1', (req, res) => {
    res.json({msg:'api'})
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)
app.use('/api/v1/articles',  articleRouter)
app.use('/api/v1/comments',  commentRouter)
app.use('/api/v1/like',  likesRouter)

import multer from 'multer'
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
app.post('/api/v1/test', upload.single('image'),async (req, res) => {
    console.log('req body', req.body)
    console.log('file', req.file)
    res.send({})
})
// app.get('/api/v1/aws-url/s3imgs', authenticateUser, async (req, res) => {
//     const url = await generateUploadURL()
//     res.status(StatusCodes.OK).json({url})
// })
// app.delete()
// // Deployed: any get route will point to index html after  routes above passed
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)  // use method is needed for middleware
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5001


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            // console.log(__dirname)
            console.log(`server is listenning on port ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start()