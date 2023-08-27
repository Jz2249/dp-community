import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LikeSchema = mongoose.Schema({
   userId: {
       type: Schema.Types.ObjectId,
       ref: 'User'
   },
   userName: {
        type: String
   },
   commentId: {
       type: Schema.Types.ObjectId,
       ref: 'Comment'
   },
   articleId: {
       type: Schema.Types.ObjectId,
       ref: 'Article'
   }

}, { timestamps: true })


export default mongoose.model('Like', LikeSchema);