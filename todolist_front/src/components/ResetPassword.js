import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { resetPasswordRequest } from '../store/actions/resetPasswordActions';

import "../styles.css";

const ResetPassword = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [token, setToken] = useState();
    const { logged } = useSelector(({login}) => login);
    const dispatch = useDispatch();
    
    if (logged) return <Redirect to='/'/>

    const handleResetPassword = () => {
        dispatch(resetPasswordRequest({ token, email, password }));
        window.location.hash.replace(`${window.location.origin}/login`);
    }

    return(
        <div>
            <section>
                <h1>RESET PASSWORD</h1>
                    <input className="fullInput" type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/> <br/>
                    <input className="fullInput" type="password" placeholder="New Password" onChange={event => setPassword(event.target.value)}/> <br/>
                    <input className="fullInput" type="text" placeholder="Authorization token" onChange={event => setToken(event.target.value)}/> <br/>
                    <button onClick={handleResetPassword}> Reset Password </button>
            </section>
        </div>
    )
};

export default withRouter(ResetPassword);