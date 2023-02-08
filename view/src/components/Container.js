
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import React, { useState } from 'react'
import './Container.css';

export const Container = () => {
  const [NewText, setNewText] = useState();
  const [submit, setSubmit] = useState()

  const textchangeHandler = (event) => {
    setNewText(event.target.value);
  }

  const submithandler = (event) => {
      event.preventDefault();
      // const data={
      //   submit:NewText,
      //   string:'ITem added'
      // }
      // console.log(data)
      
      setSubmit(NewText)
  
      setNewText(" ");
  }
  console.log(submit)
  return (
    <div className='container'>
      <label></label>
      <input className='input-txt' type='text' onChange={textchangeHandler} value={NewText} placeholder='Add a text'></input>
      <div className='sub-container-1'>
        <div className='inner-container-1'>
          <CalendarMonthIcon style={{ color: 'rgb(90, 90, 90)' }}></CalendarMonthIcon>
          <EditNotificationsOutlinedIcon style={{ color: 'rgb(90, 90, 90)' }}></EditNotificationsOutlinedIcon>
        </div>
        <button className='Button' onClick={submithandler}>Add</button>
      </div>

    </div>
  )
}
