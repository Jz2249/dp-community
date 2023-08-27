import Wrapper from "../assets/wrappers/BigSidebar"
// import { useAppContext } from "../context/appContext"
import CustomNavLinks from "./CustomNavLinks"
// import Logo from "./logos"


const BigSideBar = () => {
  // const { showSideBar } = useAppContext()
  return (
   <Wrapper>
      <div className='sidebar-container'>
        <div className="content">
          {/* <header>
            <Logo />
          </header> */}
          <CustomNavLinks />
        </div>
    
      </div>
      </Wrapper>

   
  )
}

export default BigSideBar