import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './edit.scss'
import { PermIdentity, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

// import logo from '../../male.jpg'
import logo from './../../images/male_2.jpg'

import useMediaQuery from '../../hooks/useMediaQuery'

// import MobSidebar from '../../Mobile/MobSidebar/MobSidebar'
// import MobNav from '../../Mobile/MobNavbar/MobNav'


const Edit = () => {
    // const isDesktop = useMediaQuery('(max-width: 768px)')

  return (
    <div className='user'> 

        <div className="userContainer">

            <div className="userContainerComponents">

              <div className="userTitileContainer">
                    <h1 className="userTitle">Edit User</h1>
                    <Link to='/lists/members/new'>
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
                                <span className="userShowUsername">Tunde Amos</span>
                                <span className="userShowUserTitle">Member</span>
                            </div>
                        </div>

                        <div className="userShowBottom">

                            <span className='fr_mobile_flex'>
                            
                                <span className="userShowTitle">Account Details</span>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">amotun99</span>
                                </div>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">19 yrs</span>
                                </div>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">Male</span>
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
                            
                            <span className='fr_mobile_flex'>
                            
                                <span className="userShowTitle">Other Details</span>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">Member</span>
                                </div>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">Minister</span>
                                </div>
                                
                                <div className="userShowInfo">
                                    <PermIdentity  className='userShowIcon'/>
                                    <span className="userShowInfoTitle">Nov 22</span>
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
                                    <label>Gender</label>
                                    <input type="select" placeholder='Male' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Role</label>
                                    <input type="text" placeholder='Member' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Department</label>
                                    <input type="text" placeholder='Minister' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Age</label>
                                    <input type="text" placeholder='19 yrs' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Birthday</label>
                                    <input type="text" placeholder='Nov 22' className='userUpdateInput'/>
                                </div>

                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input type="text" placeholder='09019953850' className='userUpdateInput'/>
                                </div>
                                
                                <div className="userUpdateItem">
                                    <label>Number of next of kin</label>
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

export default Edit