import React from 'react';
import './TextForm.css';
import { useState } from 'react';
import DateDropdown from './DateDropdown';
import { useNavigate } from 'react-router-dom';

function TextForm({username}) {
    const [startDate, setStartDate]= useState(new Date())

    const [value, setValue] = useState("");
    const [bold, setBold] = useState(false);
    let navigate = useNavigate(); 


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const boldHandler = () => {
        document.getElementById('text').classList.add('bold');
    }

    const italicsHandler = () => {
        document.getElementById('text').classList.add('italics');
    }

    const underlineHandler = () => {
        document.getElementById('text').classList.add('underline');
    }

    const handleSubmit = (e) => {
        console.log("date:"+ startDate); 
        e.preventDefault();
        const uname = username;
        const postURL = "http://localhost:8080/addLeave"
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username: uname,
                text: value,
                leaveDate: startDate
            })
        })
            .then(() => {
                alert('Your leave has been added to the system!');
            })
            navigate("/login");
    }

    return (
        <div className='page'>
            <div className="form">
            <div className='namebox'>Hello {username}</div>
            <form onSubmit={handleSubmit}>
                <div className='content'>
                <header className="form-header">
                    <span className="controls">
                        <div className='font-btn' onClick={boldHandler}><strong>B</strong></div>
                        <div className='font-btn' onClick={italicsHandler}><em>I</em></div>
                        <div className='font-btn' onClick={underlineHandler}><u>U</u></div>
                    </span>
                    <textarea rows="10" className="text" id='text' value={value} onChange={handleChange} />
                </header>
                <div className='date-class'>
                <DateDropdown startDate={startDate} setStartDate={setStartDate} />
                </div>
                </div>
                
                <div >
                    <button className='submit-btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
        

        </div>
    )
}

export default TextForm
