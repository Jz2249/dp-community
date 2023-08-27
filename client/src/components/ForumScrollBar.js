
import { Link } from "react-router-dom"
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import Wrapper from "../assets/wrappers/ForumHeader";

const ForumScrollBar = () => {

    // useEffect(() => {
    //     // Initialize Swiper after the component mounts
    //     new Swiper(".swiper", {
    //       // How many slides to show
    //       slidesPerView: 1,
    //       // How much space between slides
    //       spaceBetween: 20,
    //       // Make the next and previous buttons work
    //       navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //       },
    //       // Make the pagination indicators work
    //       pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true
    //       },
    //     });
    //   }, []);
  return (
    <Wrapper>
    <div className="container">
        <h2 className="title section-title" data-name="Quick read">Quick read</h2>
        <div className="swiper">
        <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                scrollbar={{ draggable: true }}
                navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
                //Responsive breakpoints for how many slides to show at that view
                breakpoints={{ 700: {slidesPerView: 2},1200: {slidesPerView: 3} }
                }   
                >
            <div className="swiper-wrapper">
                <SwiperSlide>
                <Link to="#" className="article swiper-slide">
                    <img src="images/logo.svg" alt="" className="article-image" />
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>
                        <h3 className="title article-title">Is VR the future0?</h3>
                    </div>
                </Link>  
                </SwiperSlide>

                <SwiperSlide>
                <Link to="#" className="article swiper-slide">
                    <img src="images/logo.svg" alt="" className="article-image" />
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>
                        <h3 className="title article-title">Is VR the future2?</h3>
                    </div>
                </Link>  
                </SwiperSlide>

                <SwiperSlide>
                <Link to="#" className="article swiper-slide">
                    <img src="images/logo.svg" alt="" className="article-image" />
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>
                        <h3 className="title article-title">Is VR the future3?</h3>
                    </div>
                </Link>  
                </SwiperSlide>

                <SwiperSlide>
                <Link to="#" className="article swiper-slide">
                    <img src="images/logo.svg" alt="" className="article-image" />
                    <div className="article-data-container">
                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>
                        <h3 className="title article-title">Is VR the future?</h3>
                    </div>
                </Link>  
                </SwiperSlide>
            
            </div>
            <div className="swiper-button-prev swiper-controls"></div>
            <div className="swiper-button-next swiper-controls"></div>
            <div className="swiper-pagination"></div>
        </Swiper>
    </div>    
    </div>

    </Wrapper>
  )
}

export default ForumScrollBar