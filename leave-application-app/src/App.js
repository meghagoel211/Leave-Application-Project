import React, { useState } from 'react'
import DateDropdown from './components/DateDropdown'
import Login from './components/Login';
import TextForm from './components/TextForm';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import useToken from './useToken';
import SignUp from './components/SignUp';

function App() {
    const [token, setToken]= useState();
    const [username, setUsername] = useState();


      
    return (
        <div className='container'>
            <h1>Leave Request Application </h1>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login setToken={setToken} username={username} setUsername={setUsername} />} />
                    <Route exact path="/login" element={<Login setToken={setToken} username={username} setUsername={setUsername} />} />
                    <Route path="/signup" element={<SignUp username={username} setUsername={setUsername} />} />
                    <Route path="/dashboard" element={<TextForm username={username} />} />
                </Routes>
            </BrowserRouter>  
        </div>
    )


}

export default App
