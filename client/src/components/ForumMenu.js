
import { Link, NavLink } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
// import { useState } from 'react'
const ForumMenu = ({isMenuOpen} ) => {
  const {  toggleLogOut, user } = useAppContext()
  // const [showLogOut, setShowLogOut] = useState(false)
  return (
    <div className={`menu ${isMenuOpen ? 'activated' : ''}`} id="menu"  >
      <ul className="list">
        <li className="list-item">
          <NavLink to="/" className="list-link current" activeClassName="current">Home</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/web3/community/all-articles" className="list-link" activeClassName="current" >Community </NavLink>
        </li>
        {!user && (
          <>
            <li className="list-item">
            <Link to="/register" className="list-link screen-lg-hidden" > Login </Link>
            </li>
            <li className="list-item">
            <Link to="/register" className="list-link screen-lg-hidden" >Sign up </Link>
            </li>
            </>
          )}
        {user && (
          <li className="list-item">
          <><Link to="#" onClick={toggleLogOut} className="list-link" >Logout </Link></>
          </li>
        )}
      </ul>
    </div>
    
  )
}

export default ForumMenu