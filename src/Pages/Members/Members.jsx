import React from 'react'
import './Members.scss'
import Table from '../../components/Table/Table'


const Members = () => {
  return (
    <div className='list'>
    <div className="listContainer">
      <div className="listContainerComponents">        
        <div className="membersContainer">
          <Table />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Members