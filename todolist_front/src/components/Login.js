import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

import { loginRequest } from '../store/actions/loginActions';

import "../styles.css";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [typePasswordInput = "password", setTypePasswordInput] = useState();
    const { logged } = useSelector(({login}) => login); 
    const dispatch = useDispatch();

    if (logged) return <Redirect to='/'/>

    const handleLogin = () => {
        dispatch(loginRequest({ email, password }));
    }

    const handleShowPassword = () => {
        if (typePasswordInput == "password")
            setTypePasswordInput("text");
        else 
            setTypePasswordInput("password")
    }

    return(
        <div>
            <section>
                <h1>SIGN IN</h1>
                    <input placeholder="Email" type="email" onChange={event => setEmail(event.target.value)}/>
                    <input placeholder="Password" type={typePasswordInput} onChange={event => setPassword(event.target.value)}/>
                    <FaEye style={{marginLeft:"5px", color:"white"}} onClick={handleShowPassword}/>
                    <button onClick={handleLogin}> SIGN IN </button> 

                <h4> 
                    Don't have a acount? <Link to={`/register`}> Register </Link> <br/>
                    Forgot password? <Link to={`/forgotPassword`}> Reset Password </Link>
                </h4>
            </section>
        </div>
    )
};

export default withRouter(Login);