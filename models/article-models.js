import mongoose from 'mongoose';
import User from './user-model.js'
const ArticleSchema = new mongoose.Schema(
  {
    articleTitle: {
      type: String,
      required: [true, 'Please provide title'],
      maxlength: 50,
    },
    articleDesc: {
      type: String,
      required: [true, 'Please provide description'],
      maxlength: 5000,
    },
    articleDescPlainText: {
      type: String,
    },
    articleImg: {
      type: String
    },
    uid: {
      type: Number,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    createdByUserName: {
      type: String,
    }
  },
  { timestamps: true }
);

ArticleSchema.pre('save', async function () {
  const user = await User.findById(this.createdBy);
  if (user) {
    this.createdByUserName = user.name; // Set the user name in the createdByUserName field
  }
  
});
export default mongoose.model('article', ArticleSchema);
