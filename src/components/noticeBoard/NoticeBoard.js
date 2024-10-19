import React from 'react'
import './noticeBoard.css'
import iconimg from "../../assets/Icon.png"

export default function NoticeBoard() {
  return (
    <div className='noticeBoard'>
      <div className="sidehead">
        <img src={iconimg} alt="" className='iconn' />
        <div className='head'>
            <span>Notice</span>
            <span>Board</span>
        </div>
      </div>
    </div>
  )
}
