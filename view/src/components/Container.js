
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import React, { useState } from 'react'
import './Container.css';

export const Container = (props) => {
  const [NewText, setNewText] = useState();
 

  const textchangeHandler = (event) => {
    setNewText(event.target.value);
  }

  const submithandler = (event) => {
      event.preventDefault();

      props.senddata(NewText);
      setNewText(" ")
      
  }
 
  return (
    <div className='container'>
      <form onSubmit={submithandler} style={{width:"100%"}}>
      <label></label>
      <input className='input-txt' type='text' onChange={textchangeHandler} value={NewText} placeholder='Add a text'></input>
      <div className='sub-container-1'>
        <div className='inner-container-1'>
          <CalendarMonthIcon style={{ color: 'rgb(90, 90, 90)' }}></CalendarMonthIcon>
          <EditNotificationsOutlinedIcon style={{ color: 'rgb(90, 90, 90)' }}></EditNotificationsOutlinedIcon>
        </div>
        <button className='Button' >Add</button>
      </div></form>

    </div>
  )
}
