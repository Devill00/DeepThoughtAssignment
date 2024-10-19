import React, { useState } from 'react'
import { FaChevronUp } from "react-icons/fa";
import bulb from '../assets/bulb.png'
import leaf from '../assets/leaf.png'
import message from '../assets/message.png'
import question from '../assets/question.png'
import plus from '../assets/plus.png'
import './threadBuilder.css'


export default function ThreadBuilder() {
    const [show,setshow]=useState(true);
    const handleClick=()=>{
        setshow(!show);
    }
  return (
    <div className='thread'>

      <div className="threadheader">
        <div className={show?"icon":'icon rotate'}>
        <FaChevronUp  onClick={handleClick}/>
        </div>
        <div className="threadheading">
        Thread A
        </div>
      </div>


      <div className={show?"content1":"hide"}>

        <div className="subthreadandsubIntrepretationgrid">


            <div className="subthread">
            <div className="title">
                Sub thread 1
            </div>
            <div className="textbox">
            <textarea name="" id="" placeholder='Enter Text here'></textarea>
            </div>
            </div>

            <div className="subthread">
            <div className="title">
                Sub Interpretation 1
            </div>
            <div className="textbox">
            <textarea name="" id="" placeholder='Enter Text here'></textarea>
            </div>
            </div>

            <div className="icongroup">
                <img src={bulb} alt="" className='icon' />
                <img src={message} alt="" className='icon' />
                <img src={question} alt="" className='icon' />
                <img src={leaf} alt="" className='icon'/>
            </div>
            <div className="selectmenu">
                <select name="" id="" className='menu'><option >Select Category</option> </select>
                <select name="" id="" className='menu'><option >Select Process</option> </select>
            </div>
        </div>

       <button type='submit'>
        <img src={plus} alt="" className='plus'/>
        Sub-thread
        </button>


        <div className="subthreadsummary">
            <div className="title">
                Summary for Thread A
            </div>
            <div className="textbox">
               <textarea name="" id="" placeholder='Enter Text here'></textarea>
            </div>
            </div>
      </div>
    </div>
  )
}
