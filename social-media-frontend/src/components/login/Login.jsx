import React from 'react'
import "./login.css"
import {loginCall} from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from "@mui/material"
import {Link} from 'react-router-dom'
function Login() {


    const email = React.useRef();
    const password = React.useRef();

    const {user,isFetching,error,dispatch}=React.useContext(AuthContext);
    const handleClick = (e) =>{
        e.preventDefault();
        // console.log(email.current.value)
        loginCall({email:email.current.value,password:password.current.value},dispatch);
    }

    console.log(user)

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Xocial</h3>
                    <span className="loginDesc">Connect with friends and world around you on Xocial</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" className="loginInput" required ref={email}/>
                        <input placeholder="Password" type="password" className="loginInput" required minLength="6" ref={password}/>
                        <button className="loginButton" disabled={isFetching}>{isFetching?<CircularProgress color="inherit" size="20px"/>:"Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/" style={{"textAlign":"center"}}>
                        <button className="loginRegisterButton" disabled={isFetching}>{isFetching?<CircularProgress color="inherit" size="20px"/>:"Create a New Account"}</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login