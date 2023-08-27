/* ForumReplyComment.js */
import React, { Fragment, useEffect, useState } from 'react';
import ForumSingleComment from './ForumComment';
import Wrapper from '../assets/wrappers/ForumReply'

const ForumReplyComment = (props) => {
  const [childCommentNumber, setChildCommentNumber] = useState(0);
  const [openReplyComments, setOpenReplyComments] = useState(false);

  useEffect(() => {
    let commentNumber = 0;
    props.commentList.forEach((comment) => {
      if (comment.respondTo === props.parentCommentId) {
        commentNumber++;
      }
    });
    setChildCommentNumber(commentNumber);
  }, [props.commentList, props.parentCommentId]);

  const handleChange = () => {
    setOpenReplyComments(!openReplyComments);
  };

  const renderReply = (parentCommentId) => {
    return (
      openReplyComments &&
      props.commentList.map((comment) => {
        if (comment.respondTo === parentCommentId) {
          return (
            <Fragment key={comment._id}>
              <div className="reply-container">
                <ForumSingleComment comment={comment} postId={props.postId} />
                <ForumReplyComment
                  commentList={props.commentList}
                  postId={props.postId}
                  parentCommentId={comment._id}
                />
              </div>
            </Fragment>
          );
        } else {
          return null;
        }
      })
    );
  };

  return (
    <Wrapper>
    <div className="reply-comment-container">
      {childCommentNumber > 0 && (
        <p className="reply-info" onClick={handleChange}>
          View {childCommentNumber} more replies
        </p>
      )}
      {renderReply(props.parentCommentId)}
    </div>
  </Wrapper>
  );
};

export default ForumReplyComment;
