import aws from 'aws-sdk'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'
import crpto from 'crypto'
import { promisify } from 'util'
dotenv.config()

const randomBytes = promisify(crpto.randomBytes)
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
// const s3 = new S3Client({
//     credentials: {
//         accessKeyId,
//         secretAccessKey,
//     },
//     region: bucketRegion
// })

// const generateUploadURL = async () => {
//     const rawBytes = await randomBytes(16)
//     const imageName = rawBytes.toString('hex')

//     const params = ({
//         Bucket: bucketName,
//         Key: imageName,
//         Expires: 60
//     })

//     const uploadURL = await s3.getSignedUrlPromise('putObject', params)
//     return uploadURL
// }

// export default generateUploadURL    