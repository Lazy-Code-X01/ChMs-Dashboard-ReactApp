import React from 'react'
import './Widget.scss'

// importing icons
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';


const Widget = ({ type }) => {
    let data;

    //tempoary
    let num = 1000

    switch (type) {
        
        case 'newMembers':
            data = {
                icons: <PersonAddRoundedIcon className='icons'/>,
                numbers: num,
                text: 'new members for february',
                arrIcon: <KeyboardArrowUpRoundedIcon className='arr-icon positive'/>,
                smallIcon: <PersonAddRoundedIcon 
                    className='icon'
                    style={{
                        color: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    }}
                    />
            }
            break;
    
        case 'presentMembers':
            data = {
                icons: <Diversity1RoundedIcon className='icons'/>,
                numbers: num,
                text: 'present in attendance',
                arrIcon: <KeyboardArrowUpRoundedIcon className='arr-icon positive'/>,
                smallIcon: <Diversity1RoundedIcon 
                    className='icon'
                    style={{
                        color: 'crimson',
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    }}
                    />
            }
            break;
    

        case 'totalMembers':
            data = {
                icons: <Diversity3RoundedIcon className='icons'/>,
                numbers: num,
                text: 'total members',
                arrIcon: <KeyboardArrowUpRoundedIcon className='arr-icon positive'/>,
                smallIcon: <Diversity3RoundedIcon 
                className='icon'
                style={{
                    color: 'goldenrod',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  }}
                />
            }
            break;
    
        default:
            break;

    }

  return (
    <div className='widget'>
        <div className="left widgetIcon">
            {data.icons}
        </div>
        <div className="right">
            <span className='numbers'>{data.numbers}</span>
            <span className='text'>{data.text}</span>
        </div>
        {data.arrIcon}
        {data.smallIcon}
    </div>
  )
}

export default Widget