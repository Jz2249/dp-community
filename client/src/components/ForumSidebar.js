import { Link } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";
import Wrapper from '../assets/wrappers/ForumTrending'
const ForumSidebar = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
        setCoins(response.data.slice(0, 5)); // Only take the top 10 coins
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData()
    // setInterval(fetchData, 6000);
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>

    <div className="sidebar d-grid">
        <div className="Trending">
        <h3 className="title featured-content-title">Trending Coins</h3>

        {coins.map((coin, index) => (
     
        <Link to="#" className="trending-news-box">
            <div key={coin.id} className="trending-news-img-box">
                <span className="trending-number place-items-center">{index+1}</span>
            </div>
            <div className="trending-news-data">
                <div className="article-data">
                {/* <span className="article-data-spacer"></span> */}
                        <img src={coin.image} className="coin-image" alt="coin" />
                        
                        <span className="title article-title"> {coin.symbol}</span>
                        <span>${coin.current_price.toFixed(2)}</span>
                </div>
            {/* Add more properties as needed */}
          
            </div>
        </Link>
      ))}

        

        {/* <Link to="#" className="trending-news-box">
            <div className="trending-news-img-box">
                <span className="trending-number place-items-center">01</span>
                <img src="images/logo.svg" alt="" className="article-image" />
            </div>
            <div className="trending-news-data">

                <div className="article-data">
                    <span>23 Dec 2021</span>
                    <span className="article-data-spacer"></span>
                    <span>3 Min read</span>
                </div>

                <h3 className="title article-title">Sample article title</h3>

            </div>
        </Link> */}
        </div>
    </div>
    </Wrapper>
  )
}

export default ForumSidebar