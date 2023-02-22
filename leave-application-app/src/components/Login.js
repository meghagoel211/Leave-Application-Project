import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';



function Login({setToken, username, setUsername}) {
    const [password, setPassword] = useState();
    let navigate = useNavigate(); 


    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('http://localhost:8080/login-user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username: username,
                password
            })
        })
            .then((res) => {
                res.json();
            })
            .then((data)=>{
                console.log("data:"+data)
            })
            navigate("/dashboard");
        // setToken('token123');
    }

    return (
        <div className='wrapper'>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className='form-box'>
                <div className='label'>
                    <label>Username</label>
                    <input className='login-input' type="text" onChange={(e)=> setUsername(e.target.value)} />
                </div>
                <div className='label'>
                    <label>Password</label>
                    <input className='login-input' type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                </div>
                
                
                <button className='login-btn' type='submit' >Login</button>
    
                <p>Not already a user?</p>
                <a href='/signup' onClick={()=>navigate("/signup")}> Sign-up </a>

            </form>

        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
