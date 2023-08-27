import styled from 'styled-components'
const Wrapper = styled.aside`
/* common css */
body {
    margin: 0;
    padding: 0;
    background: #262626;
  }
  
  h2 {color: #fff; text-align: center;}
  
  /* button hover amazing effect */
  .image2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    /* line-height: 2; */
    color: #ff0;
    font-size: 30px;
    font-family: verdana;
    letter-spacing: 4px;
  
    /* use combination of any two */
    /* 1. */
    /* padding: 5px; */
  
    /* 2. */
    padding-left: 5px;
    /* padding-right: 5px; */
  }
  
  .image2::before,
  .image2::after,
  span::before,
  span::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: transparent;
    transition: 1s;
    /* -webkit-mix-blend-mode: hue; */
  }
  
  .image::before {
    top: -2px;
    left: -2px;
    border-top: 2px solid #ff0;
    border-left: 2px solid #ff0;
  }
  .image2::after {
    top: -2px;
    right: -2px;
    border-top: 2px solid #ff0;
    border-right: 2px solid #ff0;
  }
  
  span::before {
    bottom: -2px;
    left: -2px;
    border-bottom: 2px solid #ff0;
    border-left: 2px solid #ff0;
  }
  span::after {
    bottom: -2px;
    right: -2px;
    border-bottom: 2px solid #ff0;
    border-right: 2px solid #ff0;
  }
  
  
  .image2:hover::before,
  .image2:hover::after,
  .image2:hover span::before,
  .image2:hover span::after  {
    width: calc( 180px / 2);
    height: calc( 50px / 2);
  }
  `
  export default Wrapper