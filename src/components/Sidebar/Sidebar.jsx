import React, { useState, useContext } from 'react';

import Navbar from '../Navbar/Navbar';

//importing Icons
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { NavLink } from 'react-router-dom';

import './sidebar.scss'

import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = ({children}) => {

    const {dispath} = useContext(DarkModeContext)
    const sidebar  = document.querySelector('.sidebar')
    // const closeSidebar =  () => {
    //     if(sidebar.classList.contains('open')){
    //         sidebar.classList.add('close')
    //     }
    // }
  return (
    <div className='container'>
        <div  className="sidebar">
            
            <div className="top">
                <span className='logo'>ProjectCaaS</span>
            </div>

            <div className="center">
                <ul>
                    <p className='title'>MAIN</p>
                    <NavLink to='/'  className="link" activeclassName="active">
                        <li>
                            <DashboardRoundedIcon className='icon' />
                            <span className="link_text">Dashboard</span>
                        </li>
                    </NavLink>

                    <p className="title">LISTS</p>
                    <NavLink to='lists/members' className='link' activeclassName='active'>
                        <li>
                            <PeopleAltRoundedIcon className='icon' />
                            <span>Members</span>
                        </li>
                    </NavLink>
                    
                    <NavLink to='lists/attendance' className='link' activeclassName='active'>
                    <li>
                        <AutoStoriesRoundedIcon className='icon' />
                        <span>Attendance</span>
                    </li>
                    </NavLink>

                    <p className="title">SERVICES</p>
                    <NavLink to='services/subscription' className='link' activeclassName='active'>
                    <li>
                        <AccountBalanceRoundedIcon className='icon' />
                        <span>Subscription</span>
                    </li>
                    </NavLink>

                    <NavLink to='services/settings' className='link' activeclassName='active'>
                    <li>
                        <SettingsSuggestRoundedIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    </NavLink>

                    <p className="title">USER</p>
                    <NavLink to='user/profile' className='link' activeclassName='active'>
                    <li>
                        <AccountCircleRoundedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    </NavLink>

                    <NavLink to='user/logout' className='link' activeclassName='active'>
                    <li>
                        <LogoutRoundedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                    </NavLink>

                </ul>
            </div>

            <div className="bottom">
                <p className="title">THEME</p>
                <div className="themes">
                    <div className="colorOption" onClick={()=> dispath({type: 'LIGHT'})} ></div>
                    <div className="colorOption" onClick={()=> dispath({type: 'DARK'})} ></div>
                    {/* <div className="colorOption"></div> */}
                </div>
            </div>
        </div>
        <div className="overlay"></div>
        <div className="sidebar_imitation"></div>

        <main>
            <Navbar />
            {children}
        </main>

    </div>
  )
}

export default Sidebar