import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from "../context/appContext"
import Logo from "./logos"
import { useState } from "react"
import ForumHeader from "./ForumHeader"
const NavBar = () => {
  const { toggleSideBar, toggleLogOut, user } = useAppContext()
  const [showLogOut, setShowLogOut] = useState(false)
  return (
    <Wrapper>
    <body>
      <ForumHeader />
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h1 className='logo-text'>Dashboard</h1>
        </div>
        <div className="btn-container">
          <button 
            type="button" 
            className="btn" 
            onClick={() => setShowLogOut(!showLogOut)}
            >
              <FaUserCircle />
              {user && user.name}
              <FaCaretDown />
          </button>
          <div className={showLogOut ? "dropdown show-dropdown" : "dropdown"}>
            <button 
              type='button' 
              className="dropdown-btn"
              onClick={toggleLogOut}
              >
                logout
            </button>
          </div>
        </div>
      </div>
       
    </body>
    </Wrapper>
  )
}

export default NavBar