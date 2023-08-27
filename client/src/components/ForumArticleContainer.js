import { useAppContext } from "../context/appContext"
import { useEffect} from "react"
// import he from 'he'
import ForumHeader from "./ForumHeader"
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/JobsContainer"
import ForumArticle from "./ForumArticle"

const ForumArticleContainer = () => {
    const {showArticles, articles, setAddPost} = useAppContext()
   useEffect(() => {
    showArticles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   
  return (
    <body>
      <ForumHeader />
      <section className="featured-articles section section-header-offset">
        <button className="btn create-btn">
          <Link to='new' className="create-btn-title" onClick={()=>setAddPost}>New Post</Link>
        </button>
        <Wrapper> 
            <div className="jobs">
                {articles.map((article) => {
                    // const createdAtDate = new Date(article.createdAt)
                    // const decodedArticleDesc = he.decode(article.articleDesc);
                    return (  
                        <ForumArticle key={article._id} {...article}/>
                        // <div key={article._id}>
                        //     <div><h2>{article.articleTitle}</h2> created by {article.createdByUserName}</div>
                        //     <div>{createdAtDate.toLocaleString()}</div>
                        //     <div dangerouslySetInnerHTML={{ __html: decodedArticleDesc }} /> 
                        //     {article.articleImg && (
                        //     <img src={article.articleImg} className='article-img'/>
                        //     )}
                            
                        //     <button 
                        //     type='button' 
                        //     className='btn delete-btn' 
                        //     onClick={() => deletePost(article._id)}>
                        //     Delete
                        // </button>   
                        // <Link
                        //     to='new'
                        //     type='button'
                        //     className="btn edit-btn"
                        //     onClick={() => setEditArticle(article._id)}>
                        //     edit
                        // </Link>      
                        // </div>
                    )
                })}
            </div>      
          </Wrapper>
          </section>
 
        
    </body>
  )
}

export default ForumArticleContainer