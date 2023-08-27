import {useState, useEffect} from 'react'
import { FormRow, Alert, ForumHeader} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import {useAppContext} from '../context/appContext';
import { useNavigate } from 'react-router-dom';


const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState);
  const {user, isLoading, showAlert, displayAlert, registerUser, loginUser}= useAppContext()

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  const toggleMember = () => {
    setValues({...values, isMember: !values.isMember})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember} = values
    if (!password || !email || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = {name, email, password}
    if (isMember) {
      //console.log(currentUser)
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }

  useEffect(() => {
    if(user) {
      setTimeout(() => navigate('/'), 1500)
    }
  }, [user, navigate])
  
    return (
      <section className='section-header-offset'>
      {/* <body className='body1'> */}
      {/* <div className="login-card-container">
        <div className='login-card'>
          <div className='login-card-logo'>
            <img alt='logo'/>
          </div>
        <div className="login-card-header">
          <h1>Sign in</h1>
          <div>Please login to use platform</div>
        </div>
        <form className='login-card-form' >
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded">
              mail
            </span>
            <input type="text" placeholder='Enter Email' required autoFocus />
          </div>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded">lock</span>
            <input type="text" placeholder='Enter Password' required autoFocus />
          </div>
          <div className="form-item-other">
            <div className="checkbox">
              <input type="checkbox" id="rememberMeCheckbox" />
              <label for="rememberMeCheckbox"> Remember me</label>
            </div>
          </div>
        </form> */}
      
      <ForumHeader />
      <Wrapper className='full-page'>
        
        <div className='login' >
          <div className='card'>
            <div className="left">
              <h3>Welcome, </h3>
              <p>
                To have better user experience, please register and login!
              </p>
              <p>
              Our new features are coming soon!
              </p>
      
           </div>
            <div className='right'>
        <form className="form" onSubmit={onSubmit}>
         
          <h3>{values.isMember ? "Login" : "Register"}</h3>
          {showAlert && <Alert />}
          {/* name input */}
          {!values.isMember &&
            <FormRow 
            type='name' 
            name='name'
            value={values.name} 
            handleChange={handleChange} />}
          
          <FormRow 
            type='email' 
            name='email'
            value={values.email} 
            handleChange={handleChange} />
          <FormRow 
            type='password' 
            name='password'
            value={values.password} 
            handleChange={handleChange} />
          <button type='submit' className='btn btn-block' disabled={isLoading}>submit</button>
          {/* <button type='submit' className='btn btn-block btn-hipster' disabled={isLoading} onClick={
            () => {
              loginUser({
                email: 'tester@test.com',
                password: 'wwwwww'
              })
            }
          }>
            {isLoading ? 'loading...' : 'Demo App'}
            </button>  */}
          <p>
            {values.isMember ? "Not a Member yet?" : "Already a Member?"}
            <button type='button' onClick={toggleMember} className='btn member-btn'>
              {values.isMember ? "Register" : "Login"}
            </button>
       
          </p>
          </form>
          </div>
          </div>
          </div>
      
      </Wrapper>
      
     
      
      {/* </div>
      </div> */}
  
      </section>
    )
  }
  
  export default Register