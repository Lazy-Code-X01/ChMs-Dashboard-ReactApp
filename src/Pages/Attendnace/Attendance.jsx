import React from 'react'
import './Attendance.css'

//importing pages
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import StyledTable from '../../components/StyledTable/StyledTable'
import { rows } from '../../components/StyledTable/attendanceData'

import useMediaQuery from '../../hooks/useMediaQuery'

// import MobSidebar from '../../Mobile/MobSidebar/MobSidebar'
// import MobNav from '../../Mobile/MobNavbar/MobNav'


const Attendance = () => {
  const isDesktop = useMediaQuery('(max-width: 768px)')
  return (
    <div className='attendance'>
      {/* {
        isDesktop
        ? <MobSidebar />
        : <Sidebar />
      } */}
      <Sidebar />
      
      <div className="attendanceContainer">
        {/* {
          isDesktop
          ? <div className="mob_sidebar_imitation"></div>
          : <div className="sidebar_imitation"></div>
        } */}
        <div className="sidebar_imitation"></div>
        <div className="attendanceContainerComponents">
          
          {/* {
            isDesktop
            ? <MobNav />
            : <Navbar />
          } */}
          <Navbar />
          
          <div className="attendaceHolder">
              <div className="attendanceHeader">
                Attendance
                <div className="attendanceCount">
                  Attendees: <span className='count_el'>{rows.length}</span>
                </div>
              </div>
              <StyledTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attendance