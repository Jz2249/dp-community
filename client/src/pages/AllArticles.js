
import { useEffect, useState } from "react"
import { useAppContext } from "../context/appContext"
import { Link } from "react-router-dom"
// import he from 'he'
import { ForumComments, ForumHeader } from "../components"
import Wrapper from '../assets/wrappers/ForumLists'
// import PageWrapper from '../assets/wrappers/PageBtnContainer'
import { FaUserCircle, } from 'react-icons/fa'
import PageBtnContainer from "../components/PageBtnContainer"
import CommentWrapper from '../assets/wrappers/ForumComment'
import ForumLikeDislike from "../components/ForumLikeDislike"
import {TailSpin} from "react-loader-spinner"
import ButtonWrapper from "../assets/wrappers/ForumNormalBtn"
const AllArticles = () => {
   const {commentLoading, articleLoading, page, commentObj, showAllArticles, all_articles, user, setAddPost, numOfPages, showCommentsInCommunity} = useAppContext()
   const [commentOpen, setCommentOpen] = useState(
    Array.from({ length: 10 }, () => false))
   const handleClick = (index) => { 
    const updatedCommentOpen = [...commentOpen];
    updatedCommentOpen[index] = !updatedCommentOpen[index];
    setCommentOpen(updatedCommentOpen)
   }
   useEffect(() => {
    showAllArticles()
    if (all_articles.length !== 0) {
      showCommentsInCommunity(all_articles)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page, commentObj])
   
  return (
    <body className="body1">
      <section className="featured-articles section section-header-offset">
        <ForumHeader />
        <div className="featured-article featured-content-title">
          <h3 style={{color: "darkgoldenrod"}}>Community Forum</h3>
          <ButtonWrapper >
          <button class="normal-btn">
          <Link to='/web3/profile/articles/new'  
              onClick={()=>setAddPost}
              style={{ '--co': '#E95A49' }}
            >
                New Post
            </Link>
            </button>
            </ButtonWrapper>
        </div>
        
          <div className="post">
            <div className="container">
            <div className="btn-container">
       
          
          </div>
         
          {all_articles.map((article, index) => {
            const createdAtDate = new Date(article.createdAt)
            // let decodedArticleDesc = he.decode(article.articleDesc);
            let comment_length = 0
            if (article.comments) {
              for (const c of article.comments) {
                if (!c["respondTo"]) {
                  comment_length++
                }
              }
            }
            
            return (
              <Wrapper>
                 <div>
              
              <div key={article._id} className="trending-news-box">
               <div class="container">
                   <div class="square">
                   {(articleLoading || commentLoading )  && 
                   (
                    <div className="spin">
                      <TailSpin  type="Oval" color="#3498db" height={40} width={40}/>
                    </div>)
                  }
                  {(!articleLoading && !commentLoading) && (
                   <>
                   <div class="h1">
                    
                    {article.articleTitle}
                 </div>
                 <span className="profile-img"><FaUserCircle /></span>
                 <span> {article.createdByUserName}</span>
                 <span className="date">{createdAtDate.toLocaleString()}</span>
                 <Link to={`/web3/community/all-articles/${article._id}` } >
                 <p className="post" dangerouslySetInnerHTML={{ __html: article.articleDesc }} /> 
                 </Link>
                  {article.articleImg && <img src={article.articleImg} alt="article" />}
                  <div className="item reply" onClick={() => handleClick(index)}>
                    reply
                  </div>
                  <div className="item" onClick={() => handleClick(index)}>
                  {comment_length} Comments
                  </div>
                  {article._id && <ForumLikeDislike articleId={article._id} user={user} />}
                  <br></br>
                  
                  {commentOpen[index] &&
                    <CommentWrapper className="comments">
                      <ForumComments postId={article._id} commentList={article.comments} />
                    </CommentWrapper>
                  }</> 
                  )}
                    
                   </div>
                   
               </div>
               
           </div>
             
              
              </div>
              </Wrapper>
          )
          })}
       

          </div>
        </div>
      </section>
      <div className="pagination-center">

      {numOfPages > 1 && <PageBtnContainer />}
    
      </div>
    </body>
  )
}


//  <form className="all-articles">
// <div className="article-data">
//     <span className="title article-title">{article.articleTitle}</span>
//     <span className="article-data-spacer"></span>
//     <span>created by {article.createdByUserName}</span>
//     <span className="article-data-spacer"></span>
//     <span>{createdAtDate.toLocaleString()}</span>
    
//     <div dangerouslySetInnerHTML={{ __html: decodedArticleDesc }} />     
//     <img src={article.articleImg} />  
// </div>
// </form> 
export default AllArticles