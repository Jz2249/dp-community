import mongoose, {Schema} from 'mongoose';



import User from './user-model.js'
const CommentSchema = new mongoose.Schema({
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "provide user id"]
      },
      createdByUserName: {
        type: String
      },
      postId: {
        type: Schema.Types.ObjectId,
        ref: "Article",
        required: [true, "need postid"]
      },
      respondTo: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      respondToUserName: {
        type: String
      },
      content: {
        type: String,
        required: [true, "need content"]
      }
  }, {timestamps: true});

// CommentSchema.pre('save', async function () {
//   const user = await User.findById(this.createdBy);
//   const respond_user = await User.findById(this.respondTo);
//   if (user) {
//     this.createdByUserName = user.name; // Set the user name in the createdByUserName field
//     this.repondToUserName = respond_user.name
//   }
// })
export default mongoose.model('Comment', CommentSchema);
// import mongoose, {Schema} from 'mongoose';
// import User from './user-model.js'
// const CommentSchema = new mongoose.Schema(
//   {
//     PostId: {
//         type: Schema.Types.ObjectId,
//         ref: 'Article',
//         required: true
//     },
//     comment: {
//       type: String,
//       required: [true, 'Please provide description'],
//       maxlength: 5000,
//     },
//     createdBy: {
//         type: mongoose.Types.ObjectId,
//         ref: 'User',
//         required: [true, 'Please provide user'],
//       },
//     createdByUserName: {
//     type: String,
//     },
//     CommentImg: {
//       type: String
//     },
//     replies: [{
//         createdBy: {
//           type: mongoose.Types.ObjectId,
//           ref: 'User',
//           required: [true, 'Please provide user'],
//         },
//         createdByUserName: {
//             type: String,
//             },
//         commentId: {
//             type: Schema.Types.ObjectId,
//             required: true
//         },
//         comment: {
//             type: String,
//             required: true
//         },
//         createdAt: {
//             type: Date,
//             default: new Date().getTime()
//         },
//         replies: [{
//           createdBy: {
//             type: mongoose.Types.ObjectId,
//             ref: 'User',
//             required: [true, 'Please provide user'],
//           },
//           createdByUserName: {
//               type: String,
//               },
//           commentId: {
//               type: Schema.Types.ObjectId,
//               required: true
//           },
//           comment: {
//               type: String,
//               required: true
//           },
//           createdAt: {
//               type: Date,
//               default: new Date().getTime()
//           }
//       }]
//     }]
    
//   },
//   { timestamps: true }
// );

// CommentSchema.pre('save', async function () {
//   const user = await User.findById(this.createdBy);
//   if (user) {
//     this.createdByUserName = user.name; // Set the user name in the createdByUserName field
//   }
//   const updateCreatedByUserNameRecursively = (replies) => {
//     if (replies && replies.length > 0) {
//       for (const reply of replies) {
//         reply.createdByUserName = user.name; // Set createdByUserName for reply
//         updateCreatedByUserNameRecursively(reply.replies); // Recursively update nested replies
//       }
//     }
//   };

//   updateCreatedByUserNameRecursively(this.replies);
// });



// export default mongoose.model('Comment', CommentSchema);
