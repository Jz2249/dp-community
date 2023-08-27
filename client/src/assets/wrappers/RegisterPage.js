import styled from 'styled-components'

const Wrapper = styled.section`

  .login {
  /* height: 100vh; */
  /* background-color: black; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 140px;
  }
  .alert {
    font-size:20px;
  }
  .card {
    display: flex;
    /* background-color: black; */
    border-radius: 10px;
    min-height: 400px;
    overflow: hidden;
  }
  .left {
    flex: 1;
    max-width: 600px;
    background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
      url('https://sebangsanetwork.com/wp-content/uploads/2023/01/Vector_2646.jpg')
        center;
    background-size: cover;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: white;
    flex-direction: column;
  }
  .form-row {
    font-size: 20px;
  }
    h1 {
      font-size: 100px;
      line-height: 100px;
    }
    
    p {
      font-size: 15px;
    }

    span {
      font-size: 14px;
    }
    
    .form button {
      width: 30%;
      padding: 5px;
      margin-left: 5px;
      border: 2px solid;
      background-color: white;
      color: rebeccapurple;
      font-weight: bold;
      font-size: 17px;
      cursor: pointer;

    }
  

    .right {
      flex: 1;
      max-width: 400px;
      flex-direction: column;
      padding: 25px;
      display: flex;
      flex-direction: column;
      /* gap: 20px; */
      justify-content: center;
      /* align-items:center; */
    }
      h3 {
      color: P;
      font-size: 50px;

      align-items:center;
      justify-content:center;
      }
      
      form {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
        input {
        border: none;
        border-bottom: 1px solid lightgray;
        padding: 10px 10px;
        background-color: white;
        }
        
        button {
          width: 50%;
          padding: 10px;
          border: none;
          background-color: #938eef;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
      
   
    display: flex; /* Enable flexbox */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    width: 90%; /* Set the width of the article */
    margin: 0 auto; 
    height: 50%;

article .d-grid{
    display: grid;
    align-content: center;
    justify-content: center;
}
.older-posts-grid-wrapper .d-grid {
    height: 22%;
}
.Trending {
 
 width: 100%;
}
article {
    display: flex; /* Enable flexbox */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    width: 50%; /* Set the width of the article */
    margin: 0 auto; /* Center the article horizontally on the page */
    /* Add other styling as needed */
}
.sidebar{
    /* background-color: var(--secondary-background-color); */
    padding: 2.5rem;
    border-radius: 100px;
    border-width: 1px;
    border: 10px solid rgba(129, 24, 24, 0.5);
    justify-content: center;
    width: 100%;

}
@media screen and (max-width: 700px) {
    .login {
        /* height: 100vh; */
        /* background-color: black; */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 30px;
    }
    .form button {
      width: 30%;
      padding: 2px;
      margin-left: 5px;
      border: 2px solid;
      background-color: white;
      color: rebeccapurple;
      font-weight: bold;
      font-size: 12px;
      cursor: pointer;

    }
    .left {
        flex: 1;
        max-width: 600px;
        background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
        url('https://sebangsanetwork.com/wp-content/uploads/2023/01/Vector_2646.jpg')
            center;
        background-size: cover;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0px;
        color: white;
        flex-direction: column;
  }
    .container{
        margin: 0 auto;
        padding: 0 1.5rem;
        width: 100%;
    }
    .form-input {
        color: darkgoldenrod
    }
    
}
@media screen and (min-width: 700px) {

    .trending-news-box{
        flex-direction: row;
        align-items: center;
    }
    .card {
      flex-direction: row; /* Arrange .left and .right side by side on larger screens */
    }
    .sidebar {
        /* width: 50%; */
        /* align-items:center;
        justify-content:center; */
    }
    .trending-news-img-box{
        width: 50%;
    }

    .trending-news-data{
        /* margin: auto; */
        text-align: center;
    }
    
    .newsletter-description{
        max-width: 40rem;
    }
    .form-input {
        color: darkgoldenrod
    }
    .form-container-inner{
        align-items: center;
    }

    .popular-tags-container,
    .footer-container{
        grid-template-columns: repeat(2, 1fr);
    }

    .company-data{
        order: 0;
    }

    .author{
        grid-template-columns: 25rem 1fr;
    }
}
@media screen and (min-width: 768px) {

    .featured-content{
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 5rem repeat(1, 2fr);
    }

    .headline-banner{
        grid-column: 1/-1;
        font-size: var(--font-size-sm);
    }
    
    .featured-article{
        grid-column: 3/-1;
        grid-row: 1/3;
        left: 20px;
    }

    /* .featured-article-2{
        grid-column: 3/-1;
        grid-row: 4/7;
        left: 100px;
    } */
    .featured-article-4{
        grid-column: 1/3;
        grid-row: 1/5;
        top:0px;
        

    }
    .featured-article-3{
        grid-column: 1/4;
        /* position: absolute; */
        /* z-index: 2; */
        grid-row:10/8;
        left:340px;
        width: 500px;
        height: 450px;
        border: 6px double;
        border-color: darkgoldenrod;
        border-radius: 30%;
        /* border-top-style: double;
        border-bottom-style: double; */
        border-block-color:  rgb(219, 159, 5)   ;

    }
    /* .image2{
        height: 100%;
    } */
    
    .featured-article-1{
        z-index: 1;
        grid-column: 3/5;
        grid-row: 0/3;
        left:30px;
        top:0;
    }

    .older-posts .article{
        grid-template-columns: 25rem 1fr;
        
    }

    .older-posts-article-image-wrapper{
        height: auto;
    }

    .blog-post-data img{
        height: var(--item-min-height-md);;
    }
}

@media screen and (min-width: 1024px) {
    .menu{
        position: static;
        width: initial;
        padding: initial;
        background-color: transparent;
        opacity: 1;
        transform: scale(1);
    }

    .menu > .list{
        flex-direction: row;
    }

    .screen-lg-hidden{
        display: none;
    }

    .screen-sm-hidden{
        display: block;
    }

    .sign-up-btn{
        padding: 4px;
    }
    /* create btn */

.btn.create-btn {
    display: inline-block;
    padding: 5px 10px;
    background-color: rgb(4, 95, 111);
    color: rgb(6, 192, 89);
    border-radius: 200px;
    text-decoration: rosybrown;
    font-weight: bold;
    cursor: pointer;
    /* transition: background-color 0.2s ease; */
  }
  
  .btn:hover {
    background-color: darkgray;
  }
  
  /* Optional: Style the link as a title or add any other desired styles */

  
    /* Fancy button animation effect */
    .btn.fancy-border:hover::before{
        animation: animate_border .75s linear infinite
    }

    @keyframes animate_border{
        to{
            transform:translateX(-50%)
        }
    }

    .featured-articles-container{
        grid-template-columns: 1fr 23rem;
    }

    .trending-news-img-box{
        width: 2rem;
        height: 2rem;
      
    }

    .popular-tags-container{
        grid-template-columns: repeat(3, 1fr);
    }

    .footer-container{
        grid-template-columns: repeat(5, 1fr);
    }

    .company-data{
        grid-column: span 2;
    }

    .company-description{
        max-width: 85%;
    }

    .copyright-notice{
        margin-top: auto;
    }

    .blog-post-data img{
        height: 40rem;
    }
}

@media screen and (min-width: 1200px) {
    .older-posts-grid-wrapper{
        grid-template-columns: repeat(2, 1fr);
    }
}
@media screen and (min-width: 1500px) {
    .featured-article{
        grid-column: 3/-1;
    }
    
    .featured-article-1{
        grid-column: 1/3;
        grid-row: 2/-1;
    }

}

`
export default Wrapper
