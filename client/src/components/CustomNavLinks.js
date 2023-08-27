import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const CustomNavLinks = ({toggleSideBar}) => {
  return (
    <div className="nav-links">
        {links.map((link)=> {
            const {id, text, path, icon} = link
            return (
            <NavLink to={path} 
                key={id}
                onClick={toggleSideBar}
                    className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} 
                /* add end here if using the latest react version for isActive feature */>
                <span className="icon">{icon}</span>
                {text}
            </NavLink>
            )
        })}
        </div>
  )
}

export default CustomNavLinks