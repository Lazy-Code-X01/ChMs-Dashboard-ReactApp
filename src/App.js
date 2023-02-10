import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//importing pages
import Home from  './Pages/Home/Home'
import Members from './Pages/Members/Members'
import Attendance from './Pages/Attendance/Attendance'
import Settings from './Pages/Settings/Settings'
import Subscription from './Pages/Subscription/Subscription'
import Profile from './Pages/Profile/Profile'
import Logout from './Pages/Logout/Logout'

// importing components
import Sidebar from './components/Sidebar/Sidebar';

import { DarkModeContext } from './context/darkModeContext';

import Single from './Pages/Single.jsx/Single';
import Edit from './Pages/Edit/Edit';
import New from './Pages/New/New';

// importing styles
import './App.css'
import './scss/global_mobile.scss'
import './scss/dark.scss'

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />

              <Route path='lists'>
                  <Route path='/lists/members' element={<Members />} />
                  <Route path='/lists/members/:userId' element={<Single />} />
                  <Route path='/lists/members/:userId/:userID' element={<Edit />} />
                  <Route path='/lists/members/new' element={<New />} />
                <Route path='/lists/attendance' element={<Attendance />} />
              </Route>

              <Route path='services'>
                <Route path='/services/subscription' element={<Subscription />} />
                <Route path='/services/settings' element={<Settings />} />
              </Route>

              <Route path='user'>
                <Route path='/user/profile' element={<Profile />} />
                <Route path='/user/logout' element={<Logout />} />
              </Route>  
                
            </Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
