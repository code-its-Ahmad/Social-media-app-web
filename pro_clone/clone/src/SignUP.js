import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Sign.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

  const showToast = (message, type = 'error') => {
    toast(message, { type: type });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/api/signup', {
        email: email,
        name: name,
        password: password,
        confirmPassword: confirmPassword,
      });
      showToast('Account created successfully.', 'success');
     
    } catch (error) {
      showToast(error);
    }
  };

  return (
    <div className="container">
      <div className="page">
        <div className="first-container">
          <h1 className="Title">Instagram</h1>
          <h3>
            Sign up to see photos and videos <br /> from your friends.
          </h3>
          <button className="Facebook">Facebook</button>
          <div className="divider">
            <hr className="divider-line" />
            <p className="or">OR</p>
            <hr className="divider-line" />
          </div>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              className="password"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="password"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              className="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="password"
              className="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="Signup" type="submit">
              Sign up
            </button>
          </form>
        </div>
        <div className="second-container">
          <p className="signup">
            Have an account? <Link to="/login">Login IN</Link>
          </p>
        </div>
        <div className="third-container">
          <p className="get-the-app">Get the App</p>
        </div>

        <div className="forth-container">
          <img
            className="app"
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt="Instagram app"
          />
          <img
            className="app"
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt="Instagram app"
          />
        </div>
      </div>
      <ToastContainer
        position="top-center"
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

export default SignupPage;
