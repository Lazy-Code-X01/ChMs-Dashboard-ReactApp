import React from 'react'
import './attendance.scss'
import StyledTable from '../../components/StyledTable/StyledTable'
import { rows } from '../../components/StyledTable/attendanceData'

const Attendance = () => {
  return (
    <div className='attendance'>
      
      <div className="attendanceContainer">
        <div className="attendanceContainerComponents">
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