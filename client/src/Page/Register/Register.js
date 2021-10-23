import React from 'react'
import "./Register.css"
function Register() {
    return (
        <div className="register">
            <div className="register-left">
            <h1>SocialBook</h1>
            <p>Connect with friends and the world around you on SocialBook</p>
            </div>
            <div className="register-right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email"  />
            <input type="text" placeholder="Password"  />
            <input type="text" placeholder="Confirm Password" />
            <button className="Signup">Sign Up</button>
            <button className="Login">
              Log into Account
            </button>   
            </div>
            
        </div>
    )
}

export default Register
