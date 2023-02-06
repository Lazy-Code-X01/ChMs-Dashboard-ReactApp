import React, {useContext} from 'react'
import './MobNavbar.scss'

// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';

import logo from '../../logo.jpg' 

import { DarkModeContext } from '../../context/darkModeContext';

const MobNav = () => {
  
  const {dispath} = useContext(DarkModeContext)

  return (
    <div className='mobNav'>
        <div className="mobWrapper">

        <div className="search">
          <input 
            type="text"  
            placeholder='Search...'
          />
          <SearchOutlinedIcon />
        </div>

        <div className="items">
          <div className="item">
              <Brightness4RoundedIcon className='icon' onClick={()=> dispath({type: 'TOGGLE'})} />
          </div>


          <div className="item">
            <CircleNotificationsRoundedIcon className='icon' />
            <div className="counter">4</div>
          </div>
          
          <div className="item">
            <img 
            src={logo}
            alt="" 
            className='avatar'
            />
          </div>

        </div>
        </div>
    </div>
  )
}

export default MobNav