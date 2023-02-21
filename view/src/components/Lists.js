
import React from 'react'
import './Container.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { IconButton } from '@mui/material';

export const Lists = (props) => {

  console.log(props)
  const deletehandler = async () => {
    let result = await fetch("http://localhost:5600/delete/" + props.item._id, {
      method: "DELETE"
    });
    result = await result.json();
    props.apifetch()


    console.log(result)

  }

  const edithandler = () => {

  }
  return (
    <div className='top-main'>
      <div className='main-list'>
        <div className='list-input'>

          <div className='innerlist-input'>
            <div><input  className='round-btn1' type='checkbox' ></input></div>
            {props.item.NewText}
          </div>
          <div>
            <IconButton
              onClick={deletehandler}
            >
              <DeleteOutlineIcon></DeleteOutlineIcon>
            </IconButton>
            <IconButton onClick={edithandler}>
              <ModeEditOutlineIcon></ModeEditOutlineIcon>
            </IconButton>

          </div>

        </div>



      </div></div>
  )
}
