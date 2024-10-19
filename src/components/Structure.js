import React from 'react'
import './structure.css'
import { IoIosMore } from "react-icons/io";

import leftarrow from '../assets/leftcurvedarrow.png'
import rightarrow from '../assets/rightarrow.png'
import crossarrow from '../assets/crossarrow.png'


export default function Structure() {
  return (
    <div className='structure'>
      <div className="structuretitle">
        Title
      </div>
      <div className='inputdiv'>
        <input type="text" className='longinput'/>
      </div>
      <div className="structurecontent">
        Content
      </div>
      <div className="editor">
        <div className="upper">
            <div className="filemenu upfile">
                <span className='filemenuitems'>File</span>
                <span className='filemenuitems'>Edit</span>
                <span className='filemenuitems'>View</span>
                <span className='filemenuitems'>Insert</span>
                <span className='filemenuitems'>Format</span>
                <span className='filemenuitems'>Tools</span>
                <span className='filemenuitems'>Table</span>
                <span className='filemenuitems'>Help</span>
            </div>
            <div className="filemenu downfile">
                <img src={leftarrow} alt="" className='filemenuicon'/>
                <img src={rightarrow} alt="" className='filemenuicon' />
                <img src={crossarrow} alt="" className='filemenuicon' />
                <input type="text" placeholder='Paragraph' className='downinput' />
                <IoIosMore className='moreicon'/>
            </div>
        </div>
        <div className="empty">
        </div>
      </div>
    </div>
  )
}
