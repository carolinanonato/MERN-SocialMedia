import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="auth">
        <div className="a-left">
            <img src={Logo} alt="" />
        <div className="webname">
            <h1>Social Media</h1>
            <h6>Explore the ideas throughout the world</h6>
        </div>
        </div>
        
      <LogIn/>
    </div>
  )
}
function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

function SignUp(){
    return(
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName' />
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastName' />
                </div>
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username'/>
                </div>
                <div>
                    <input type="text" className="infoInput" placeholder='Password' name='password'/>
                    <input type="text" className="infoInput" placeholder='Confirm Password' name='confirmpassword'/>
                </div>

                <div><span style={{fontSize: "12px"}}>Already have an account? LOG IN</span></div>
                <button className="button info-button" type='submit'>SIGN UP</button>
            </form>
        </div>
    )
}



export default Auth