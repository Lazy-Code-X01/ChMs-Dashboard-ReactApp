import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './User.css'
import logo from '../../logo.jpg'
import { PermIdentity, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import useMediaQuery from '../../hooks/useMediaQuery'

import MobSidebar from '../../Mobile/MobSidebar/MobSidebar'
import MobNav from '../../Mobile/MobNavbar/MobNav'


const User = () => {
    const isDesktop = useMediaQuery('(max-width: 768px)')
  return (
    <div className='user'> 
        
        {
            isDesktop
            ? <MobSidebar />
            : <Sidebar />
        }

        <div className="userContainer">

            {
                isDesktop
                ? <div className="mob_sidebar_imitation"></div>
                : <div className="sidebar_imitation"></div>
            }

            <div className="userContainerComponents">
                {
                    isDesktop
                    ? <MobNav />
                    : <Navbar />
                }
          

                <div className="userTitileContainer">
                    <h1 className="userTitle">Edit User</h1>
                    <Link to='/lists/new'>
                        <button className='userAddButton'>Create</button>
                    </Link>
                </div>

                <div className="container">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img 
                                src={logo}
                                alt="avatar" 
                                className='userShowImg'
                            />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Ann Becker</span>
                                <span className="userShowUserTitle">Member</span>
                            </div>
                        </div>

                        <div className="userShowBottom">

                            <span className='fr_mobile_flex'>
                            
                                <span className="userShowTitle">Account Details</span>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">anabeck99</span>
                                </div>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">19 yrs</span>
                                </div>
                            </span>
                            
                            <span className='fr_mobile_flex'>
                            
                                <span className="userShowTitle">Contact Details</span>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">+234 9019 953 850</span>
                                </div>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                                </div>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">Elvis Juntion. 12 Frankypaul Str.</span>
                                </div>
                            </span>

                        </div>
                    </div>

                    <div className="userUpdate">

                        <span className="userUpdateTitle">Edit</span>

                        <form className="userUpdateForm">

                            <div className="userUpdateLeft">
                                
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input type="text" placeholder='annabeck99' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Full Name </label>
                                    <input type="text" placeholder='Anna Becker' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input type="email" placeholder='annabeck99@gmail.com' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Role</label>
                                    <input type="text" placeholder='Member' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Age</label>
                                    <input type="text" placeholder='19 yrs' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input type="text" placeholder='09019953850' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Address</label>
                                    <input type="text" placeholder='Elvis Juntion. 12 Frankypaul Str.' className='userUpdateInput'/>
                                </div>

                            </div>

                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src={logo} alt="avatar" className='userUpdateImg'/>
                                    <label htmlFor="file"> <Publish className='userUpdateIcon'/> </label>
                                    <input type="file" id='file' style={{display: 'none'}}/>
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User