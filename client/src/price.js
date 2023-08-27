// import { useEffect, useState } from "react"
// import { useAppContext } from "./context/appContext"
import { Banner } from "./temp/Banner"

const GetPrice = () => {

  


   
  return (
    <>

     <Banner/>
    </>
   
  )
}

export default GetPrice

// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// const GetPrice = () => {
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h&locale=en');
//         setCoins(response.data.slice(0, 10)); // Only take the top 10 coins
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <section>
//       {coins.map((coin, index) => (
//         <div key={index}>
//           <p>{coin.name}</p>
//           <p> {coin.symbol}</p>
//           <p>${coin.current_price}</p>
//           {/* Add more properties as needed */}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default GetPrice;
