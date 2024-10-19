import React from 'react'
import homeimg from "../../assets/Group 1097.png"
import avatar from "../../assets/Ellipse 53.png"
import bell from "../../assets/Vector.png"
import settings from "../../assets/se.png"
import { IoMdMore } from "react-icons/io";
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='header'>
      <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="" className='logo' />
      <div >
        <img src={homeimg} alt="" className="icons" />
        <img src={settings} alt="" className="icons" />
        <img src={bell} alt="" className="icons" />
        <img src={avatar} alt="" className="icons" />
        <IoMdMore style={{color:"#3683F0"}} className="moreicons"/>
      </div>
    </div>
  )
}
