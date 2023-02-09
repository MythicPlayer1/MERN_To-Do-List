
import React from 'react'
import './Container.css'

export const Lists = (props) => {
  console.log(props.todolists)
 

  return (
    <div className='main-list'>
        <div className='list-input' type='text' >{props.todolists}</div>


    </div>
  )
}
