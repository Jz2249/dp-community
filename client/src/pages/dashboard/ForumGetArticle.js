import { ForumComments, ForumHeader } from "../../components"
import { useAppContext } from "../../context/appContext"
import { Navigate, useParams } from "react-router-dom"
// import { RiFacebookCircleLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri"
import { useEffect } from "react"
// import ArticleWrapper from "../../assets/wrappers/ForumArticle"
import Wrapper from '../../assets/wrappers/ForumComment'
import ForumLikeDislike from "../../components/ForumLikeDislike"
import IndexWrapper from "../../assets/wrappers/ForumGetArticle"
const ForumGetArticle = () => {
    const {id} = useParams()
    const {getArticle, articleId, commentObj, user, comments, showAlert, articleTitle, articleDesc, articleImg, articleCreatedAt} = useAppContext()
    useEffect(() => {
        getArticle(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articleId]) 
    useEffect(() => {
      getArticle(id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [commentObj, articleId])
  
  return (

    <body className="body1">
        <IndexWrapper> 
        <div className="layout">
        {showAlert && <Navigate to='/web3/community/all-articles'/>}
       {!showAlert&& ( <><ForumHeader />
            <section className="blog-post section-header-offset">
            <div className="blog-post-container container">
                <div className="blog-post-data">
                    <h3 className="title blog-post-title">{articleTitle}</h3>
                    <div className="article-data">
                        <span>{(new Date(articleCreatedAt)).toLocaleString()}</span>
                        <span className="article-data-spacer"></span>
                        {/* <span>4 Min read</span> */}
                    </div>
                    {/* <img src={articleImg} alt="" /> */}
                </div>
                <div className="container">
       
                <p className="post" dangerouslySetInnerHTML={{ __html: articleDesc }} />
           
                <img src={articleImg} alt="" />
                <ForumLikeDislike articleId={articleId} user={user} />
                <Wrapper className="comments">
                  <ForumComments postId={articleId} commentList={comments} />
            </Wrapper>
                    {/* <blockquote className="quote">
                        <p><span><RiDoubleQuotesL /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates, laboriosam voluptatum quos non consequuntur nesciunt necessitatibus tempora quod inventore corporis rem nihil itaque, at provident minus aliquam veritatis. Labore?  <span><RiDoubleQuotesR /></span></p>
                    </blockquote>
                
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quod necessitatibus, aspernatur pariatur asperiores earum quas adipisci veritatis quidem facilis! Nihil veniam quaerat nulla possimus, asperiores vero voluptatum placeat. Eveniet!
                    </p> */}
                    {/* <div className="author d-grid"> */}
                        {/* <div className="author-image-box">
                            <img src="images/logo.svg" alt="" className="article-image" />
                        </div> */}
                            {/* <div className="author-about"> */}
                      
                                {/* <h3 className="author-name">{articleCreatedByUserName}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quis repellat rerum, possimus cumque dolor repellendus eligendi atque explicabo exercitationem id.</p>
                                <ul className="list social-media">
                                    <li className="list-item">
                                        <Link to="#" className="list-link"><RiFacebookCircleLine /></Link>
                                    </li>
                                    <li className="list-item">
                                        <Link to="#" className="list-link"><RiInstagramLine /></Link>
                                    </li>
                                    <li className="list-item">
                                        <Link to="#" className="list-link"><RiTwitterLine /></Link>
                                    </li>
                                </ul> */}
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                    
                </div>
               
            </section></>)}
           
            </div>
            
     
            </IndexWrapper>
    </body>
    
  )
}

export default ForumGetArticle