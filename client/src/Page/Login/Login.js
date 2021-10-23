import React from 'react'
import "./Login.css"
function Login() {
    return (
        <div className="login">
            <div className="login-left">
            <h1>SocialBook</h1>
            <p>Connect with friends and the world around you on Lamasocial.</p>
            </div>
            <div className="login-right">
            <input placeholder="Email" type="text" />
            <input placeholder="Password" type="text" />
            <button className="Login">Log In</button>
            <span className="pass-forgot">Forgot Password?</span>
            <button className="Signup">
              Create a New Account
            </button>
            </div>
        </div>
    )
}

export default Login
