
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';
import MyAnimationComponent from './Animation';
import Wrapper from '../assets/wrappers/PriceBoarder3'
const ForumArticles = () => {

  const [oldPrice, setOldPrice] = useState(0);
  const [color, setColor] = useState("")
  const [image, setImage] = useState("")
  const ws = new WebSocket("wss://stream.binance.us:9443/ws/btcusdt@trade");
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
      // console.log(response.data.slice(0, 1))
      setOldPrice(response.data.slice(0, 1)[0].current_price.toFixed(2))
      const image = response.data.slice(0, 1)[0].image
      setImage(image)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => { 
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const newPrice = parseFloat(data.p).toFixed(2);
      if (newPrice > oldPrice) {
        setColor("green")
      }
      else if (newPrice === oldPrice) {
        setColor("white")
      }
      else if (newPrice < oldPrice) {
        setColor("red")
      }
      setOldPrice(newPrice)
    };


  // eslint-disable-next-line
  }, [oldPrice]);

  return (
            <div className="featured-content d-grid">
                
                {/* <Link to="#" className="article featured-article featured-article-1" >
                    <img src="images/logo.svg" alt="" className="article-image" />
                    <span className="article-category">Technology</span>
                    <div className="article-data-container">

                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>

                        <h3 className="title article-title">Is VR the future?</h3>

                    </div>
                </Link>    */}
  
                <Link to="#" className="article featured-article featured-article-1 image-1" >
                  <div className='article-image'>
                  <MyAnimationComponent />
                  </div>
                 {/* <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" className="article-image" /> */}
                    {/* <span className="article-category">Technology</span>  */}
                    {/* <div className="article-data-container"> */}

                        {/* <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div> */}

                        {/* <h3 className="title article-title">Is VR the future?</h3> */}
{/* 
                    </div> */}
                </Link>   

                <Link to="#" className="article featured-article featured-article-3" >

     
             
                        <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" className="article-image image2" />
                    
   
                    {/* <span className="article-category">Technology</span> */}
                    {/* <div className="article-data-container"> */}

                        {/* <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div> */}

                        {/* <h3 className="title article-title">Is VR the future?</h3> */}

                    {/* </div> */}
                    </Link>

                    {/* <Link to="#" className="article featured-article featured-article-2" >
                    <PriceBoarder3 />
                     
                            <div className='article-data'>
                              <span></span>
                              <img src={image} className='coin-image' />
                              <span  style={{color: color}}>{oldPrice}</span>
                        
                             </div>
                    </Link>    */}

                    <div className="article featured-article featured-article-4" >         
                       <div>
                       <div className='article-data'>
                                <img src={image} className='coin-image' alt="coin"/>
                                <span  style={{color: color}}>{oldPrice}</span>
            
                          </div>
                          <div className='article-data'>
                                <img src={image} className='coin-image' alt="coin" />
                                <span  style={{color: color}}>{oldPrice}</span>
            
                          </div>
                            <Wrapper>
                              <h1>YGBCC</h1>
                               <p>Lorem, ipsum dolor sit amet consectetur.</p>
                               <p> Similique a tempore sapiente corporis  </p>
                               <p>eaque fuga placeat odit voluptatibus.</p>
                               <p>fuga placeat odit voluptatibus.</p>
                               <p> Similique a tempore sapiente corp </p>
                               <p>Lorem, ipsum dolor sit amet.</p>
                               <p> Similique a tempore sapie</p>
                               <p> ipsum dolor sit amet.</p>
                               <p>dolor sit amet.</p>


                       

               
                            </Wrapper>
                           
                    
                         
                         </div>
                         
                    </div>   
                
         
             
        </div>
    
  


  )
}

export default ForumArticles