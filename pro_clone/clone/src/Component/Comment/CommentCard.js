import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
  const [commentLike, setCommentLike] = useState(false);

  const handleCommentLike = () => {
    setCommentLike(!commentLike);
  };

  return (
    <div className='flex items-center justify-between py-5'>
      <div className='flex items-center'>
        <div>
          <img
            className='w-9 h-9 rounded-full'
            src='https://cdn.pixabay.com/photo/2023/11/21/07/02/girl-8402582_640.jpg'
            alt=''
          />
        </div>
        <div className='ml-3'>
          <p>
            <span className='font-semibold'>Username</span>
            <span className='ml-2'>Nice post</span>
          </p>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-xs opacity-60 pt-2'>
        <span>1 min ago</span>
        <span>23 likes</span>
      </div>
      <div>
        {commentLike ? (
          <AiFillHeart
            onClick={handleCommentLike}
            className='text-lg hover:opacity-50 cursor-pointer text-red-600'
          />
        ) : (
          <AiOutlineHeart
            onClick={handleCommentLike}
            className='text-lg hover:opacity-50 cursor-pointer'
          />
        )}
      </div>
    </div>
  );
};

export default CommentCard;
