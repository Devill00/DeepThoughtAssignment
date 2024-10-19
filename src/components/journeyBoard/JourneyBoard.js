import React, { useState } from 'react'
import leftarrow from "../../assets/leftArrow.png"
import "./journeyBoard.css"

export default function JourneyBoard() {
    const [hide,setHide]=useState(true);

const handleclick=()=>{
setHide(!hide);
} 

  return (
    <div className={hide?'journeyboard left':'journeyboard'}>
      <div className="head">
        <h2 >Journey Board</h2>
        <img src={leftarrow} alt="" className={hide?'icon rotate':'icon'} onClick={handleclick}/>
      </div>
      <div className={hide?'content hide':'content displayflex'}>
        <ul className='listheading'>
            <li>Explore the world of management</li>
        </ul>
        <ul className='list'>
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
        </ul>
      </div>
    </div>
  )
}
