import React from 'react'
import profile from '../../profile.jpg'
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';

import './new.scss'

const New = () => {
    const [file, setFile] = React.useState('')
  return (
        <div className='new'>
        
            <div className="newContainer">
    
                <div className="newContainerComponents">

                    <div className="top">
                        <h1>Add New Member</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img 
                                src={file ? URL.createObjectURL(file) : profile } 
                                alt="avatar" 
                            />
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                    <label htmlFor="file">
                                    Image: <DriveFolderUploadRoundedIcon className='icon'/>
                                    </label>
                                    <input 
                                        type="file"  
                                        id='file' 
                                        onChange={(e)=> setFile(e.target.files[0])}
                                        style={{display: 'none'}}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Username</label>
                                    <input type="text" placeholder='john_doe' />
                                </div>
                                <div className="formInput">
                                    <label >Name and Surname</label>
                                    <input type="text" placeholder='John Doe' />
                                </div>
                                <div className="formInput">
                                    <label >Email</label>
                                    <input type="email" placeholder='johndoe@example.com' />
                                </div>
                                <div className="formInput">
                                    <label>Phone</label>
                                    <input type="number" placeholder='09019953850' />
                                </div>
                                <div className="formInput">
                                    <label>Status</label>
                                    <input type="text" placeholder='Member' />
                                </div>
                                <div className="formInput">
                                    <label>Department</label>
                                    <input type="text" placeholder='Chior' />
                                </div>
                                <div className="formInput">
                                    <label>Number of Next of Kin</label>
                                    <input type="number" placeholder='09019953850' />
                                </div>
                                <div className="formInput">
                                    <label>Birthday</label>
                                    <input type="number" placeholder='Nov., 13' />
                                </div>
                                <div className="formInput">
                                    <label >Address</label>
                                    <input type="text"  placeholder='ELvis Junction 24 Frankypaul.'/>
                                </div>
                                <div className="formInput">
                                    <label >State of Origin</label>
                                    <input type="text"  placeholder='Ife North.'/>
                                </div>
                                <div className="formInput">
                                    <label >Country</label>
                                    <input type="text"  placeholder='NIGERIA'/>
                                </div>
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default New