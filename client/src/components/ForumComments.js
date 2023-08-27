/* ForumComments.js */
import React, { Fragment, useState } from 'react';
import { Button, Input } from 'antd';
import { useAppContext } from '../context/appContext';
import ForumSingleComment from './ForumComment';
import ForumReplyComment from './ForumReplyComment';
import Wrapper from '../assets/wrappers/ForumLists'
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const ForumComments = (props) => {
  const { user, createComment } = useAppContext();
  const [commentVal, setCommentVal] = useState('');
  const navigate = useNavigate()
  const handleInput = (e) => {
    setCommentVal(e.currentTarget.value);
  };


  const onSubmit = (e) => {
    if (!user) {
      navigate('/register');
      return 
  }
    e.preventDefault();
    const articleId = props.postId;
    const variable = {
      username: user.name,
      comment: commentVal,
    };
    createComment(articleId, variable);
    setCommentVal("")
      // setOpen(!open)
  };

  return (
    <Wrapper className='comments'>
       <form onSubmit={onSubmit } className="comment-form">
          <div className="comment-input">
            <TextArea
              className="comment-textarea"
              onChange={handleInput}
              value={commentVal}
              placeholder="Write some comments"
            />
            <Button className="comment-button" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        </form>
      <div className="comment-container">
        <p className="comment-title">Replies</p>
        {props.commentList &&
          props.commentList.map((comment) => (
            !comment.respondTo && (
              <Fragment key={comment._id}>
                <div className="comment-content">
                  <ForumSingleComment comment={comment} postId={props.postId} />
                  <ForumReplyComment
                    commentList={props.commentList}
                    postId={props.postId}
                    parentCommentId={comment._id}
                  />
                </div>
              </Fragment>
            )
          ))}
       
      </div>
    </Wrapper>
  );
};

export default ForumComments;
