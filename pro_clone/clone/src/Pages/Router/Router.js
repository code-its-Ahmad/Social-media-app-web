import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Home from '../HomePage/Home';
import Profile from '../Profile/Profile';
import LoginPage from '../../Login';
import SignupPage from '../../SignUP'; 

const AppRouter = () => {
  return (
    <Router>
      <RouterContent />
    </Router>
  );
};

const RouterContent = () => {
  const location = useLocation();

  return (
    <div>
      {(location.pathname !== '/login' && location.pathname !== '/signup') && (
        <div className='flex'>
          <div className='w-[20%] border border-l-slate-500 px-10'>
            <Sidebar />
          </div>
          <div className='w-full'>
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/Username' element={<Profile />} />
            </Routes>
          </div>
        </div>
      )}
      {(location.pathname === '/login' || location.pathname === '/signup') && (
        <div>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default AppRouter;
