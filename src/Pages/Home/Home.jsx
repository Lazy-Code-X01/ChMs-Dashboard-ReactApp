import React from 'react'
import './Home.scss'


//importing pages

import Widget from '../../components/Widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/Table/Table'
import StyledTable from '../../components/StyledTable/StyledTable'
// import useMediaQuery from '../../hooks/useMediaQuery'


const Home = () => {
  return (
    <div className='home'>
      <div className="homeContainer">
        {/* <div className="sidebar_imitation"></div> */}
        
        <div className="homeContainerComponents">
          {/* <Navbar /> */}
          <div className="widgets">
            <Widget type='newMembers' />
            <Widget type='presentMembers' />
            <Widget type='totalMembers' />
          </div>

          <div className="charts">
            <Featured />
            <Chart 
              aspect={2 / 1} 
              title='Attendance Within Last 6 Months ' 
            />
          </div>

          <div className="listContainer">
            <div className="listTitle">Church Attendees for <span className='date'>5th Feb, 2023</span> </div>
            {/* <Table /> */}
            <StyledTable />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home