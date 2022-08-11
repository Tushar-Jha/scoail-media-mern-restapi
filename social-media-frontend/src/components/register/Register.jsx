import axios from 'axios';
import React from 'react'
import "./register.css"
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
function Register() {
    const username = React.useRef();
    const email = React.useRef();
    const password = React.useRef();
    const passwordAgain = React.useRef();
    let navigate=useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    }


    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Xocial</h3>
                    <span className="loginDesc">Connect with friends and world around you on Xocial</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input 
                            placeholder="Username" 
                            required 
                            ref={username} 
                            className="loginInput" 
                        />
                        <input 
                            placeholder="Email" 
                            required 
                            ref={email} 
                            type="email" 
                            className="loginInput" 
                        />
                        <input 
                            placeholder="Password" 
                            required 
                            ref={password} 
                            minLength="6" 
                            type="password" 
                            className="loginInput" 
                        />
                        <input 
                            placeholder="Password Again" 
                            required 
                            ref={passwordAgain} 
                            type="password" 
                            className="loginInput" 
                        />
                        <button className="loginButton" type='submit'>Sign Up</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/login" style={{"textAlign":"center"}}>
                            <button className="loginRegisterButton">Log into Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register