import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import {useDispach} from 'react-redux'
import { logIn, signUp } from "../../actions/AuthActions.js";

const Auth = () => {
const [isSignUp, setIsSignUp] = useState(true)
const dispach = useDispach()
const [data, setData] = useState({firstname: "", lastname: "", password: "", username: "", confirmpassword:""})

const [confirmPass, setConfirmPass] = useState(true)


const handleChange = (e)=> {
  setData({...data, [e.target.name]: e.target.value})
}

const handleSubmit = (e)=> {
e.preventDefault()

if(isSignUp) {
  data.password === data.confirmpassword 
  ? dispach(signUp(data)) 
  : setConfirmPass(false)
  
} else {
  dispach(logIn(data))
}
}

const resetForm = ()=> {
  setConfirmPass(true)
  setData({firstname: "", lastname: "", password: "", username: "", confirmpassword:""})
}
  return (
    <div className="auth">
        <div className="a-left">
            <img src={Logo} alt="" />
        <div className="webname">
            <h1>Social Media</h1>
            <h6>Explore the ideas throughout the world</h6>
        </div>
        </div>
        
        <div className="a-right">
            <form className="infoForm authForm" onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Sign up": "Log In"}</h3>

                
                 {isSignUp &&
                 <div>
                 <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange}  value={data.firstname}/>
                 <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange}  value={data.lastname}/>
             </div>}
                
                <div>
                    <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange}  value={data.username}/>
                </div>
                <div>
              
                    <input type="password" className="infoInput" placeholder='Password' name='password' onChange={handleChange}  value={data.password}/>
                    {isSignUp &&
                     <input type="password" className="infoInput" placeholder='Confirm Password' name='confirmpassword' onChange={handleChange} value={data.confirmpassword}/>}
                   
                </div>

                <span style={{display: confirmPass? "none" : "block", color: 'red', fontSize: '12px', alignSelf: 'flex-end', marginRight: '5px'}}>
                  *Passwords are not the same
                </span>


                <div><span style={{fontSize: "12px", cursor: "pointer"}} onClick={()=>{setIsSignUp((prev) => !prev); resetForm()}}>
                  {isSignUp?  "Already have an account? LOG IN" : "Don't have an account? SIGN UP!"}
                 </span></div>
                <button className="button info-button" type='submit'>
                  {isSignUp ? "Sign Up" : "Log In"}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Auth