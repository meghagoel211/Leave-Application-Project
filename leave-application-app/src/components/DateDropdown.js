import React from 'react';
import DatePicker from "react-datepicker";  
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './DateDropdown.css';


function DateDropdown({startDate ,setStartDate}) {

    const handleChange =(newdate)=>{
        setStartDate(newdate);
    }

  return (
    <div>
        <h2>Select the Date</h2>
      <DatePicker
        selected= {startDate}
        onChange = {(d)=>handleChange(d)}
        dateFormat="MM/dd/yyyy"
        name = 'startDate'
        className='date'
      />
    </div>
  )
}

export default DateDropdown
