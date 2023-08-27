import styled from 'styled-components'

const Wrapper = styled.aside`
/* ForumSingleComment.css */
/* .single-comment {
    display: flex;
    margin-bottom: 20px;
  }
   */
  .single-comment-avatar {
    margin-right: 10px;
  }
  
  .single-comment-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .single-comment-content {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
  }
  
  .single-comment-author {
    margin: 0;
    font-weight: bold;
  }
  
  .single-comment-text {
    margin: 5px 0;
    line-height: 1.4;
  }
  
  .comment-form {

    margin-top: 10px;
    align-items: center;
  }
  
  .comment-textarea {
    flex: 1;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .comment-button {
    width: 20%;
    height: 40px;
    border-radius: 5px;
  }
  `
  export default Wrapper