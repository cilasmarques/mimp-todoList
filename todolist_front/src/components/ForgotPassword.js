import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';

import { forgotPasswordRequest } from '../store/actions/forgotPasswordActions';

import "../styles.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState();
    const { logged } = useSelector(({login}) => login); 
    const dispatch = useDispatch();
    
    if (logged) return <Redirect to='/'/>

    const handleForgotPassword = () => {
        dispatch(forgotPasswordRequest({email}));
        window.alert("O token de autorização foi enviado para o seu mailTrap");
        window.location.replace(`${window.location.origin}/resetPassword`);
    }

    return(
        <div>
            <section>
                <h1>FORGOT PASSWORD</h1>
                    <input className="fullInput" placeholder="Email" type="email" onChange={event => setEmail(event.target.value)}/> <br/>
                    <button onClick={handleForgotPassword}> SEND </button> 
                    <h4> Return to <Link to={`/login`}> Login </Link></h4>
            </section>
        </div>
    )
};

export default withRouter(ForgotPassword);