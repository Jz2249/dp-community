import styled from 'styled-components'

const Wrapper = styled.article`
@import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');

.container{
  display: flex;
  /* justify-content: center; */
  padding: 40px;
  width:60%;
  
}

.square:hover {
    /* -webkit-transform: translate(20px, -10px);
    -ms-transform: translate(10px, -10px);
    transform: translate(10px, -10px); */
    -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.08);
     }

.item {
    /* display: flex;
    align-items: center; */
    gap: 10px;
    cursor: pointer;
    font-size: 15px;
    float: right;
    margin-right:20px;
    margin-bottom: 24px;
  }
.reply {
  color: darkgoldenrod;
}

.square{
  /* overflow: hidden; */
  /* position:absolute; */
  width: 100%;
  height: auto;
	/* height: 100%; */
  border-radius: 4px;
  box-shadow: 0px 2px 22px darkgoldenrod;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease; 
}
.spin {
  margin-left: 300px;
}
.mask{
  clip: rect(0px, 460px, 220px, 0px);
  border-radius: 4px;
  position: absolute;
}

img{
  width: 250px;
  height: 250px;
  margin: auto;
  }
.profile-img{
  margin-left:20px;
}
.date {
  margin-left:20px;
  font-size: 15px;
}
span{
  margin-left:1px;
  color: darkcyan;
}
.h1{
  margin: auto;
  text-align: left;
  margin-top: 10px;
  margin-bottom:13px;
  padding-left: 20px;
  font-family: 'Merriweather', serif;
  font-size: 45px;
  color: goldenrod;
}
  
p{
    text-align: justify; 
    height:auto;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    color: #C8C8C8;
    line-height: 18px;
    margin-bottom:20px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    max-height: 10.2em;
    max-height: 300px;
    /* white-space: nowrap; */
    
    /* display: -webkit-box;
    -webkit-line-clamp: 2; /* Limit the number of lines */
    /* -webkit-box-orient: vertical; */
}

.button {
    background-color: darkgoldenrod;
    color: white;
    width: 90px;
    padding: 10px 18px;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 70px;
    font-size: 12px;
    cursor: pointer;
    font-family: 'merriweather';
}
@media screen and (max-width: 700px) {
      .container {
        width: 100%;
      }
  }

.d-grid{
    display: grid;
    /* align-content: center; */
    justify-content: center;
}
.Trending {
 
 width: 100%;
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
