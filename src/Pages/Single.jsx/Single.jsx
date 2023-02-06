import React from 'react'
// import Datatables from '../../components/Datatables/Datatables'


import './single.scss'
import { Link } from 'react-router-dom'
import BarChart from '../../components/BarChart/BarChart'
import Table from '../../components/Table/Table'
import useMediaQuery from '../../hooks/useMediaQuery'

// import logo from '../../male.jpg'
import logo from './../../images/male_2.jpg'


// import MobSidebar from '../../Mobile/MobSidebar/MobSidebar'
// import MobNav from '../../Mobile/MobNavbar/MobNav'

const Single = () => {
    // const isDesktop = useMediaQuery('(max-width: 768px)')
  return (
    <div className='single'>
        
        <div className="singleContainer">
            
            <div className="singleContainerComponents">


                <div className="top">
                    <div className="left">

                        <Link to='/lists/members/sigletest/edit'>
                            <div className="editButton">Edit</div>
                        </Link>

                        <h1 className="title">Bio Data</h1>
                        <div className="item">
                            <img src={logo} alt="avatar" className="itemImg" />
                            
                            <div className="details">
                                <h1 className="itemTitle">Tunde Amos</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Gender:</span>
                                    <span className="itemValue">Male (M)</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">johndoe686@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+234 9019 953 850</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Status:</span>
                                    <span className="itemValue">Minister</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Department:</span>
                                    <span className="itemValue">Usher</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Number of Next of Kin:</span>
                                    <span className="itemValue">+2349019953859</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Date Joined:</span>
                                    <span className="itemValue">07 | 08 | 2004</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Elvis Junction. 17 Frankypual str. Lagos</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">State of Origin:</span>
                                    <span className="itemValue">OSUN</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Birthday:</span>
                                    <span className="itemValue">Nov., 23 1999</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="right">
                        <BarChart />
                    </div>
                </div>

                <div className="bottom">
                    <h1 className="title">Other Members</h1>
                    {/* <Datatables /> */}
                    <Table />
                </div>    
            </div>
      </div>
    </div>
  )
}

export default Single