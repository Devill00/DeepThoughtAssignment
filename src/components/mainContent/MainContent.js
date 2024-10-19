import React from 'react'
import './mainContent.css'
import JourneyBoard from '../journeyBoard/JourneyBoard'
import NoticeBoard from '../noticeBoard/NoticeBoard'
import Card from '../card/Card'
import Videocomponent from '../Videocomponent'
import ThreadBuilder from '../ThreadBuilder'
import Structure from '../Structure'
import Method from '../Method'
import questionmark from '../../assets/question-mark.png'
import meeting from '../../assets/meeting.png'
import schedule from '../../assets/schedule.png'
import data from '../../assets/data.json'

export default function MainContent() {
  const assets=data.tasks[0].assets;

  return (<div className='all'>
      <JourneyBoard/>
      <div className='main'>
        <div className='headandsubmit'>
      <h2 className='mainhead'>
      {data.title}
      </h2>
      <button type='submit'>Submit task</button>
      </div>
      <div className="subheadcontainer">
        <h3 className="subhead">
      {data.tasks[0].task_title}
        </h3>
        <div className="description">
        {data.tasks[0].task_description}
        </div>
      </div>


      <div className="assets">
      <Card asset={assets[0]} Component={Videocomponent} />
      <Card asset={assets[1]} Component={ThreadBuilder} />
      <Card asset={assets[2]} Component={Structure} />
      <Card asset={assets[3]} Component={Method} />
      </div>

    </div>
    <NoticeBoard/>

    <div className='lasticons'>
      <img src={questionmark} alt=""  className='icoons'/>
      <img src={meeting} alt="" className='icoons' />
      <img src={schedule} alt="" className='icoons' />
    </div>
    </div>
  )
}
