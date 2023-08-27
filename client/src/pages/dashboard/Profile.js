import { useState } from "react"
import { useAppContext } from "../../context/appContext"
// import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { FormRow, Alert, ForumHeader, BigSideBar, SmallSideBar} from "../../components"
import { Outlet } from "react-router-dom"
import FPWrapper from '../../assets/wrappers/ForumProfile'
import Wrapper from "../../assets/wrappers/Profile"
const Profile = () => {
  const {user, showAlert, displayAlert, updateUser, isLoading} = useAppContext()
  const [name, setName] = useState(user && user.name)
  const [email, setEmail] = useState(user && user.email)
  const [location, setLocation] = useState(user && user.location)
  const [lastName, setLastName] = useState(user && user.lastName)

  const handleSubmit = (e) => {
    e.preventDefault()
    // remove below while testing to for backend validation part
    if (!name || !email || !location || !lastName) {
      displayAlert()
      return
    }
    updateUser({name, email, location, lastName})
  }
  return (
    <Wrapper>
    <body className="body1">
      
        <ForumHeader />
        
        
        <div className="container form-container-inner">
          <FPWrapper>
          <SmallSideBar />
            <h3 className="blog-post-title">Profile</h3>
            </FPWrapper>
            <form action="" className="form" onSubmit={handleSubmit}>
              {showAlert && <Alert />}
              <div className="form-profile">
                <FormRow 
                  type="text"
                  name="name"
                  value={name}
                  handleChange={(e) => setName(e.target.value)}/>
                  <FormRow 
                  type="text"
                  name="email"
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}/>
                  <FormRow 
                  type="text"
                  name="location"
                  value={location}
                  handleChange={(e) => setLocation(e.target.value)}/>
                  <FormRow 
                  type="text"
                  labelText="last name"
                  name="lastName"
                  value={lastName}
                  handleChange={(e) => setLastName(e.target.value)}
                  />
                  <button className="btn form-btn" type="submit" disabled={isLoading}>
                    {isLoading ? "updating..." : "save"}
                  </button>
                  
                  <div>
                  {/*used for nested pages (new feature of react 6)*/}
                  <BigSideBar />
                  <div className="dashboard-page">
                    <Outlet /> 
                  </div>
                  
                </div>
           
              </div>
        
            </form>
           
        </div>
       
    </body>
    </Wrapper>
  )
}

export default Profile