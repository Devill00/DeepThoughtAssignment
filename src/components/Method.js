import React, { useState } from 'react'
import './method.css'
import { FaChevronUp } from "react-icons/fa";

export default function Method() {
    const [showintro,setshowintro]=useState(true);
    const handleintroClick=()=>{
        setshowintro(!showintro);
    }
    const [showthread,setshowthread]=useState(true);
    const handlethreadClick=()=>{
        setshowthread(!showthread);
    }
  return (
    <div className='method'>

        <div className="introheader">
        <div className={showintro?"icon":'icon rotate'}>
        <FaChevronUp  onClick={handleintroClick}/>
        </div>
        <div className="introheading">
        Introduction
        </div>
      </div>

      <div className={showintro?"introdescription":'hide'}>
      The 4SA Method , How to bring a idea into progress ?
        <span className='seemore'>See More</span>
      </div>

      <div className="introheader thread1">
        <div className={showthread?"icon":'icon rotate'}>
        <FaChevronUp  onClick={handlethreadClick}/>
        </div>
        <div className="introheading ">
        Thread A
        </div>
      </div>

<div className={showthread?"introdescription":"hide"}>
How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?
<span className='seemore'>See More</span>
</div>

<div className="examplesection">
<div className="exampleheader">
   Example 1
</div>
<div className="exampledescription">
You have a concept , How will you put into progress?
</div>
</div>

    </div>
  )
}
