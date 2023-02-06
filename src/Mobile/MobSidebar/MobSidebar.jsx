import {React, useState} from 'react'
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './MobSidebar.scss'

// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const MobSidebar = () => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  
  return (
    <div className='mobsidebar' style={{width: isOpen ? "200px" : "70px"}}>
        <div className="MobTop">

          <NavLink to='/' style={{textDecoration: 'none'}}>
            <h1 className="logo" style={{display: isOpen ? "block" : "none"}}>CaaS</h1>
          </NavLink>

            <div className="bars" style={{marginLeft: isOpen ? "50px" : "0px"}}>
                {
                  isOpen 
                  ? <ArrowBackIcon onClick={toggle}/>
                  : <MenuOpenIcon onClick={toggle}/>
                }
            </div>
        </div>

        <div className="MobCenter">
          <ul>
            <p className="mobTitle">MAIN</p>
            
            <NavLink to='/' style={{textDecoration: 'none'}} activeclassName="active">
              <li>
                <DashboardRoundedIcon className='icon'/>
                <span style={{display: isOpen ? "block" : "none"}}>Dashboard</span>
              </li>
            </NavLink>

            <p className="mobTitle">LIST</p>
            
            <NavLink to='/lists' style={{textDecoration: 'none'}} activeclassname='active'>
              <li>
                <PeopleAltRoundedIcon className='icon'/>
                <span style={{display: isOpen ? "block" : "none"}}>Members</span>
              </li>
            </NavLink>

            <Link to='/lists/attendance' style={{textDecoration: 'none'}}>
              <li>
                <AutoStoriesRoundedIcon className='icon'/>
                <span style={{display: isOpen ? "block" : "none"}}>Attendance</span>
              </li>
            </Link>

            <p className="mobTitle">SERVICES</p>

            <Link to='/services' style={{textDecoration: 'none'}}>
              <li>
                <AccountBalanceRoundedIcon className='icon'/>
                <span style={{display: isOpen ? "block" : "none"}}>Subscription</span>
              </li>
            </Link>

            <Link to='/services/settings' style={{textDecoration: 'none'}}>
              <li>
                <SettingsSuggestRoundedIcon className='icon'/>
                <span style={{display: isOpen ? "block" : "none"}}>Settings</span>
              </li>
            </Link>

            <p className="mobTitle">USER</p>

            <Link to='/user' style={{textDecoration: 'none'}}>
              <li>
                <AccountCircleRoundedIcon className='icon'/>
                <span style={{display: isOpen ? "block" : "none"}}>Profile</span>
              </li>
            </Link>
            
            <Link to='/user/logout' style={{textDecoration: 'none'}}>
              <li>
                <LogoutRoundedIcon className='icon'/>
                <span style={{display: isOpen ? "block" : "none"}}>Logout</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className="MobBottom">

        </div>
    </div>
  )
}

export default MobSidebar