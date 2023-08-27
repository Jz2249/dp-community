import styled from 'styled-components'
const Wrapper = styled.article`

@media screen and (max-width: 700px) {
    .container{
        max-width: 160rem;
        margin: 0 auto;
        padding: 0 1.5rem;
        width: 100%;
    }
}
@media screen and (min-width: 700px) {

    .trending-news-box{
        flex-direction: row;
        align-items: center;
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
    background-color: #0056b3;
  }
  
  /* Optional: Style the link as a title or add any other desired styles */
  .create-btn-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  .article-title {
    text-decoration: none;
  }
  
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
