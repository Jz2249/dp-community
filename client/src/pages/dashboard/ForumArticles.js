import { ForumHeader, ForumFooter } from "../../components"
import { RiDoubleQuotesL, RiTwitterLine, RiFacebookCircleLine, RiInstagramLine, RiDoubleQuotesR } from "react-icons/ri"
import { Link } from "react-router-dom"
const ForumArticles = () => {
  return(
    <body>
        <ForumHeader />
        <section className="blog-post section-header-offset">
        <div className="blog-post-container container">
            <div className="blog-post-data">
                <h3 className="title blog-post-title">Is VR the future?</h3>
                <div className="article-data">
                    <span>Dec 6th 2021</span>
                    <span className="article-data-spacer"></span>
                    <span>4 Min read</span>
                </div>
                <img src="images/logo.svg" alt="" />
            </div>
            <div className="container">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellat consequatur culpa, repudiandae aut dolores iusto. Rem natus soluta, dolores, ad deleniti, aut dolorem corrupti quasi amet unde delectus hic?
                </p>
                
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quod necessitatibus, aspernatur pariatur asperiores earum quas adipisci veritatis quidem facilis! Nihil veniam quaerat nulla possimus, asperiores vero voluptatum placeat. Eveniet!
                </p>

                <blockquote className="quote">
                    <p><span><RiDoubleQuotesL /></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates, laboriosam voluptatum quos non consequuntur nesciunt necessitatibus tempora quod inventore corporis rem nihil itaque, at provident minus aliquam veritatis. Labore?  <span><RiDoubleQuotesR /></span></p>
                </blockquote>
            
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quod necessitatibus, aspernatur pariatur asperiores earum quas adipisci veritatis quidem facilis! Nihil veniam quaerat nulla possimus, asperiores vero voluptatum placeat. Eveniet!
                </p>
                <div className="author d-grid">
                    <div className="author-image-box">
                        <img src="images/logo.svg" alt="" className="article-image" />
                    </div>
                        <div className="author-about">
                            <h3 className="author-name">John Doe</h3>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer section">
    <ForumFooter />
  </footer>
    </body>
   



    
    
      
  )
  
}

export default ForumArticles