import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import ForumMenu from "./ForumMenu"
import { FaSun, FaMoon, FaTimes, FaBars } from 'react-icons/fa';
import { useAppContext } from "../context/appContext";
import {  FaUserCircle } from 'react-icons/fa'
import Wrapper from "../assets/wrappers/ForumHeader";
const ForumHeader = () => {
  const {  user } = useAppContext()
  // const [ setShowLogOut] = useState(false)
  const [isActivated, setIsActivated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false)
  const scrollHeader = () => {
    if (window.scrollY >= 15) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    // console.log(window.scrollY)
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem('currentTheme');
    if (currentTheme) {
      setIsLight(true);
    }
  }, []);

  const toggleLight = () => {
    setIsLight(!isLight)
  }
  useEffect(() => {
    if (isLight) {
      localStorage.setItem('currentTheme', 'themeActive');
    } else {
      localStorage.removeItem('currentTheme');
    }
    document.body.classList.toggle('light-theme', isLight);
  }, [isLight]) 
  
  return (
    <Wrapper>
    <body className="body1">
    <header className={`header ${isActivated ? 'activated' : ''}`} id='header'>
      <div className="headline-banner">
                    <h3 className="headline fancy-border">
                        <span className="place-items-center">Breaking news</span>
                    </h3>
                    <span className="headline-description">We will launch our first web3 app next month!</span>
      </div>
    
        <nav className="navbar container">
          <Link to='/'>
            <h2 className="logo">LOGO</h2>
          </Link>
          <ForumMenu isMenuOpen={isMenuOpen} isLight={isLight} toggleLight={toggleLight} toggleMenu={toggleMenu} />
          {/* light/dark theme */}

          <div className="list list-right">
            <button className={`button place-items-center ${isLight ? 'light-theme': ''} `} 
              id="theme-toggle-btn"
              onClick={toggleLight}>
              <FaSun className="ri-sun-line sun-icon" />
              <FaMoon className="ri-moon-line moon-icon"/>
            </button>
            <button 
              className={`button screen-lg-hidden menu-toggle-icon ${isMenuOpen ? 'activated': ''}`} 
              id="menu-toggle-icon"
              onClick={toggleMenu}
              >
                <FaBars className="ri-menu-3-line open-menu-icon" />
                <FaTimes className="ri-close-line close-menu-icon" />
            </button>
              {!user && (
                <>
                <Link to="/register" className="list-link screen-sm-hidden" >Login </Link>
                <Link to="/register" className="list-link screen-sm-hidden btn sign-up-btn fancy-border" >
                  <span>Sign up</span>
                </Link>
                </>
              )}
          
              {user && (
                  <>
                  <Link to="/web3/profile"
                    className="btn1" 
                    
                    >
                      <FaUserCircle />
                     {user && user.name}
                      {/* <FaCaretDown /> */}
                 </Link>        
                </>
              )}
            
            



          </div>
          {/* Form Section (implemented later) */}
          {/* featured articles */}
        </nav>
        </header>
    
        </body>
       </Wrapper>
      
  )
}

export default ForumHeader