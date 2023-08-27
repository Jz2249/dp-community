import styled from 'styled-components'

const Wrapper = styled.article`
/* ForumReplyComment.css */

.reply-comment-container {
  margin-top: 10px;
  padding-left: 20px;
  border-left: 2px solid #ccc;
}

.reply-info {
  font-size: 14px;
  margin: 0;
  color: gray;
  cursor: pointer;
}

.reply-container {
  margin-left: 20px;
}

/* Add any additional styling you want for the ForumSingleComment component */
.single-comment {
  margin-bottom: 10px;
}

.single-comment-content {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.single-comment-content p.single-comment-text {
  margin: 0;
}

/* Styling for the reply form */
.reply-form {
  display: flex;
  margin-top: 10px;
}

.reply-textarea {
  flex: 1;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
}

.reply-button {
  width: 20%;
  height: 36px;
  margin-left: 10px;
}



`

export default Wrapper
