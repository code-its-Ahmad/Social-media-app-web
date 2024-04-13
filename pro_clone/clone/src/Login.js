import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import firstimage from './Image/main1-preview.png';
import fblogo from './Image/facebook.png';
import logo from './Image/logo.png';

function LoginPage() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const showToast = (message, type = 'error') => {
    toast(message, { type: type });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const correctUsername = 'yourUsername';
    const correctPassword = 'yourPassword';

    try {
      await axios.post('http://127.0.0.1:8000/api/login', {
        name: name,
        password: password,
      });
      showToast('Account created successfully.', 'success');
    } catch (error) {
      showToast(error.response.data.message);
    }

    if (name === correctUsername && password === correctPassword) {
      toast.success('Welcome! You have successfully logged in.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (name === '' || password === '') {
      toast.error('Please enter your username and password.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } 
  };

 


  const handleFacebookLogin = () => {
    alert('Perform Facebook login here');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`main-transition ${darkMode ? 'dark-mode' : ''}`}>
      <div className='transition'>
        <img src={firstimage} className='mainImage' alt='' />
      </div>
      <div className='overlanp'></div>
      <div className={`pageone ${darkMode ? 'dark-mode-page' : ''}`}>
        <div className={`first-container ${darkMode ? 'dark-mode' : ''}`}>
          <h1 className='Title'>
            <img src={logo} className='img' alt='' />
          </h1>
          <form onSubmit={handleLogin}>
          <input
            type='text'
            className='username'
            placeholder='Phone, username, or Email address'
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            className='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='Login' type='Submit'>
            Log In
          </button>
          </form>
          <div className='divider'>
            <hr className='divider-line' />
            <p className='or'>OR</p>
            <hr className='divider-line' />
          </div>
          <br />
          <div className={`facebook ${darkMode ? 'dark-mode' : ''}`}>
            <img src={fblogo} alt='Facebook Logo' className='fb' />
            <p className='logfb' onClick={handleFacebookLogin}>
              Login with Facebook
            </p>
          </div>
          <br />
          <p>Forgotten your password?</p>
        </div>
        <div className={`second-container ${darkMode ? 'dark-mode' : ''}`}>
          <p className='signup'>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </p>
        </div>
        <div className={`third-container ${darkMode ? 'dark-mode' : ''}`}>
          <p className='get-the-app'>Get the App</p>
        </div>
        <div className={`fourth-container ${darkMode ? 'dark-mode' : ''}`}>
          <img
            className='app'
            src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png'
            alt='Instagram app'
          />
          <img
            className='app'
            src='https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png'
            alt='Instagram app'
          />
        </div>
      </div>
      <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
        <a href='#'>Meta</a>
        <a href='#'>About</a>
        <a href='#'>Blog</a>
        <a href='#'>Jobs</a>
        <a href='#'>Help</a>
        <a href='#'>API</a>
        <a href='#'>Privacy</a>
        <a href='#'>Terms</a>
        <a href='#'>Locations</a>
        <a href='#'>Instagram Lite</a>
        <a href='#'>Threads</a>
        <a href='#'>Contact Uploading & Non-Users</a>
        <a href='#'>Meta Verified</a>
        <br />
        <br />
        <a href='#'>English</a>
        <a href='#'>© 2023 Instagram from Meta</a>
        <button className={`dark-mode-button ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default LoginPage;
