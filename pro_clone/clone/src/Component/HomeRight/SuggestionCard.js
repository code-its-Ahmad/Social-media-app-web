// SuggestionCard.js
import React from 'react';

const SuggestionCard = ({ username, isFollower }) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img className='w-9 h-9 rounded-full' src={`https://example.com/${username}-profile-image.jpg`} alt=''></img>
        <div className='ml-2'>
          <p className='text-sm font-semibold'>{username}</p>
          <p className='text-sm font-semibold'>{isFollower ? 'Follower You' : 'Not Following'}</p>
        </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold'>{isFollower ? 'Following' : 'Follow'}</p>
    </div>
  );
};

export default SuggestionCard;
