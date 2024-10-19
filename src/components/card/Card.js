import React, { useState } from 'react'
import './card.css'

import { FaInfo } from "react-icons/fa6";



export default function Card({asset,Component}) {

    const [show,setShow]=useState(true);
    const handleShow=()=>{
        setShow(!show);
    }

  return (
    <div className='card'>
        <div className="cardheader">


      <div className="heading">
      {asset.asset_title}
      </div>

      <div className="icondiv" onClick={handleShow}>
      <FaInfo />
      </div>
      </div>
      
      <div className={show?"descriptionBox showdesc":'descriptionBox'}>
        <div className="descriptionContent">
        <span className="desctitle">
            Description: 
        </span>
        {" "+asset.asset_description}
        </div>
      </div>

      <div className="content">
                {<Component/>}
        </div>

    </div>
  )
}
