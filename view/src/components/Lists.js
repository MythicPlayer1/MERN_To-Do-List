
import React from 'react'
import './Container.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { IconButton } from '@mui/material';

export const Lists = (props) => {

  const deletehandler=()=>{

  }

  const edithandler=()=>{

  }
  return (
    <div className='top-main'>
      <div className='main-list'>
        <div className='list-input' >
          <div> {props.item.NewText}</div>
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
