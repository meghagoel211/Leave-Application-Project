import React, { useState } from 'react';
import './SignUp.css';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';



function SignUp({username, setUsername}) {
    const [password, setPassword] = useState();
    let navigate = useNavigate(); 



    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("button");
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username: username,
                password: password
            })
        })
            .then((res) => {
                res.json()
            })
            // .then((data)=>{
            //     console.log("data:"+data)
            // })
        // setToken('token123');
        navigate("/dashboard");
    }

    return (
        <div className='wrapper'>
            <h1>Please Sign Up</h1>
            <form onSubmit={handleSubmit} className="sign-form ">
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
                
                
                <button className='sign-btn' type='submit' >Sign Up</button>
    
                <p>Already a user?</p>
                <a href='/login' onClick={()=>navigate("/login")}>Login </a>

            </form>

        </div>
    )
}



export default SignUp;
