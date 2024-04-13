// HomeRight.js
import React, { useEffect, useState } from 'react';
import SuggestionCard from './SuggestionCard';

export const HomeRight = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from Laravel API or XAMPP MySQL
    fetch('http://your-laravel-api-endpoint/users') // Replace with your Laravel API endpoint
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <div className='justify-between items-center'>
        <div className='flex items-center'>
          <div>
            <img className='w-12 h-12 rounded-full' src='https://cdn.pixabay.com/photo/2023/11/30/07/51/bridge-8420945_640.jpg' alt=''></img>
          </div>
          <div className='ml-3'>
            <p className='opacity-70'>YourUsername</p>
          </div>
        </div>
        <div>
          <p className='text-blue-700 font-bold ml-20'>Switch</p>
        </div>
        <div className='space-y-5 mt-10'>
          {userData.map(user => (
            <SuggestionCard key={user.id} username={user.username} isFollower={user.isFollower} />
          ))}
        </div>
      </div>
    </div>
  );
};
