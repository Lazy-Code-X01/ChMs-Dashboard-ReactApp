import React from 'react'
import './navbar.scss'

//importing icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import logo from '../../logo.jpg' 

const Navbar = () => {
  // funtion to open the menu in react
  const openMenu = () => {
    let sidebar = document.querySelector('.sidebar')
    sidebar.classList.add('open')
  }

  

  return (
    <div className='navbar'>

    <div className="wrapper">

      <MenuOpenIcon className='hamburger_menu' onClick={openMenu}/>
      
      <div className="search">
        <input 
          type="text"  
          placeholder='Search...'
        />
        <SearchOutlinedIcon />
      </div>

      <div className="items">
        <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
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

export default Navbar