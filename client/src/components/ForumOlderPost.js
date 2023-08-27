import { Link } from "react-router-dom"
import { RiArrowRightSLine } from 'react-icons/ri';
import Wrapper from '../assets/wrappers/ForumOlderPost'
const ForumOlderPost = () => {
  return (
    <Wrapper>
        <div className="container">
            <h2 className="title section-title" data-name="Older posts">Older posts</h2>

            <div className="older-posts-grid-wrapper d-grid">

                <Link to="#" className="article d-grid">
                    {/* <div className="older-posts-article-image-wrapper">
                        <img src="images/logo.svg" alt="" className="article-image" />
                    </div> */}

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                        <p className="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                    </div>
                </Link>

                <Link to="#" className="article d-grid">
                    {/* <div className="older-posts-article-image-wrapper">
                        <img src="images/logo.svg" alt="" className="article-image" />
                    </div> */}

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                        <p className="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                    </div>
                </Link>

                <Link to="#" className="article d-grid">
                    {/* <div className="older-posts-article-image-wrapper">
                        <img src="images/logo.svg" alt="" className="article-image" />
                    </div> */}

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                        <p className="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                    </div>
                </Link>

                <Link to="#" className="article d-grid">
                    {/* <div className="older-posts-article-image-wrapper">
                        <img src="images/logo.svg" alt="" className="article-image" />
                    </div> */}

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                        <p className="article-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique a tempore sapiente corporis, eaque fuga placeat odit voluptatibus.</p>
                    </div>
                </Link>
            </div>
            <div className="see-more-container">
                <Link to="#" className="btn see-more-btn place-items-center">See more
                 <RiArrowRightSLine />
                </Link>
            </div>
        </div>
        </Wrapper>
  )
}

export default ForumOlderPost