import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';

import { registerRequest } from '../store/actions/registerActions';

import "../styles.css";

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { logged } = useSelector(({login}) => login); 
    const dispatch = useDispatch();
    
    if (logged) return <Redirect to='/'/>

    const handleRegister = () => {
        dispatch(registerRequest({ name, email, password }));
    }

    return(
        <div>
            <section>
                <h1>REGISTER</h1>
                    <input type="text" placeholder="Name" onChange={event => setName(event.target.value)}/>
                    <input type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}/>
                    <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/> <br/>
                    <button onClick={handleRegister}> Register </button>
                <h4> Return to <Link to={`/login`}> Login </Link></h4>
            </section>
        </div>
    )
};

export default withRouter(Register);