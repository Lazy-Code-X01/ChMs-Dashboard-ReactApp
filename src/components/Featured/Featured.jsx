import React from 'react'
import './Featured.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { grey } from '@mui/material/colors';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <div className="title">total members as at 5th Feb, 2023</div>
        <MoreVertIcon  fontSize='small'/>
      </div>

      <div className="bottom">
        <div className="featuredChart">
        <CircularProgressbar value={80} text='80%' strokeWidth={4} 
            styles={{
              root: { width: 100 },
              path: { stroke: `#3f51b5` },
              trail: { stroke: grey[300] },
              text: { fill: grey[800], fontSize: '1.5rem' },
          }}
          />
        </div>
          <p className="title">total members 5th  Feb, 2023</p>
          <div className="amount">800</div>
          <p className='desc'>
            last three sundays today not inclusive
          </p>

          <div className="summary">
            
            <div className="item">
              <div className="itemTitle">16th Dec</div>
              <div className="itemPercentage positive">
                <KeyboardArrowUpIcon />
                80%
              </div>
            </div>
            
            <div className="item">
              <div className="itemTitle">10th Dec</div>
              <div className="itemPercentage positive">
                <KeyboardArrowUpIcon />
                70%
                </div>
            </div>
            
            <div className="item">
              <div className="itemTitle">8th Dec</div>
              <div className="itemPercentage negative">
                <KeyboardArrowDownIcon />
                40%
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Featured