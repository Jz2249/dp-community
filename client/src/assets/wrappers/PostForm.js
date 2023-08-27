import styled from 'styled-components';

const Wrapper = styled.main`
  .post-form {
    background-color: white;
  }
  .ql-container {
    height: 350px;
    overflow: hidden;
  }
  .btn-container {
    display: flex;
    justify-content: flex-end; /* Align buttons to the right */
    margin-bottom: 5px;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    margin-left: 10px; /* Add some margin between the buttons */
    margin-bottom: 10px;
  }
 .delete-btn {
  color: darkred;
  background-color: grey;
 }
  .article-img {
    width: 70%;
    height: 70%;
  }
  .preview-article-img {
    width: 300px;
    height: 400px;
  }
`;

export default Wrapper;
