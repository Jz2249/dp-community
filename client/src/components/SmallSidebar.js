import Wrapper from "../assets/wrappers/SmallSidebar"
import { useAppContext } from '../context/appContext';
// import Logo from './logos';
import CustomNavLinks from "./CustomNavLinks";

const SmallSidebar = () => {
  const {showSideBar, toggleSideBar} = useAppContext()
  return (
    <Wrapper>
         <div className={showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"}>
            <div className="content">
              {/* <button type="button" className="close-btn" onClick={toggleSideBar}> */}
                {/* <FaTimes /> */}
              {/* </button> */}
              {/* <header> */}
                {/* <Logo /> */}
              {/* </header> */}
              <CustomNavLinks toggleSideBar={toggleSideBar} />
            </div>
         </div>
    </Wrapper>
   
  )
}

export default SmallSidebar