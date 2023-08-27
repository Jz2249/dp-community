import { Outlet} from "react-router-dom"
// import Wrapper from "../../assets/wrappers/SharedLayout"
// import { BigSideBar, ForumHeader, ForumNavbar, SmallSideBar } from "../../components"
const SharedLayout = () => {
  return (
    // <Wrapper>
      <body>
      {/* <ForumHeader /> */}
      {/* <main className="dashboard"> */}
        {/* <SmallSideBar /> */}
        {/* <BigSideBar /> */}
        {/* <div> */}
          {/* <ForumNavbar /> */}
           {/*used for nested pages (new feature of react 6)*/}
          <div className="dashboard-page">
            <Outlet /> 
          </div>
        {/* </div> */}
        
      {/* </main> */}
      </body>
    // </Wrapper>
  )
}

export default SharedLayout