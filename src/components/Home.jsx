import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='flex justify-end h-[50px]' >
      <div className="pub">
        <h2><Link to="pubRecord">Congragation Pulisher Record </Link></h2>
        {/* <ul>
            <li><a href="">Add Pulisher</a></li>
            <li><a href="">Update Pulisher</a></li>
            <li><a href="">Moved Pulisher</a></li>
            <li><a href="">Pulisher Contact</a></li>
            <li><a href="">Service Group</a></li>
        </ul> */}
      </div>
      <div className="reports">
        <h2><Link to="fieldServicereport">Congragation Report</Link></h2>
        {/* <ul>
            <li><a href="">Add Report</a></li>
            <li><a href="">Update Report</a></li>
            <li><a href="">Moved Report</a></li>
        </ul> */}
      </div>
      {/* <div className="meetings"> */}
        {/* <h2>Congragation Meetings</h2> */}
        {/* <ul>
            <li><a href="">Mid-week Meetings</a></li>
            <li><a href="">Weekend Meetings</a></li>
            <li><a href="">Meeting Attendant</a></li>
        </ul> */}
      {/* </div> */}
    </div>
  )
}

export default Home
