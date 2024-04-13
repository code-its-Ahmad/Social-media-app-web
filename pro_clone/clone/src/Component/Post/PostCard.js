import React, { useState } from 'react';
import './PostCard.css';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModel from '../Comment/CommentModel';
import { useDisclosure } from '@chakra-ui/react';

export const PostCard = () => {
  const [ShowDropDown, setDropDown] = useState(false);
  const [isPostLike, setLike] = useState(false);
  const [isSaved, setISaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePostLike = () => {
    setLike(!isPostLike);
  };
  
  const handleSaved = () => {
    setISaved(!isSaved);
  };
  
  const handleClick = () => {
    setDropDown(!ShowDropDown);
  };

  const handleOpenComment =() =>{
    onOpen();
  }

  return (
    <div>
      <div className='border rounded-md w-full'>
        <div className="post-card-container justify-between items-center w-full py-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full bg-gray-500"
              src="https://cdn.pixabay.com/photo/2023/10/12/06/44/flowers-8309995_640.jpg"
              alt=""
            />
            <div className="user-info ">
              <p className="font-semibold text-sm">Username</p>
              <p className="font-thin">Location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className={`dropdown-content ${ShowDropDown ? 'visible' : 'hidden'}`}>
              {ShowDropDown && (
                <p className='bg-black text-white py-1 px-4 rounded-ms cursor-pointer mt-3'>Delete</p>
              )}
            </div>
          </div>
        </div>
        <div className='w-full'>
          <img src='https://cdn.pixabay.com/photo/2023/09/09/12/38/fisherman-8243136_640.jpg' alt='' className='w-full h-auto'/>
        </div>
        <div className='flex justify-between items-center w-full px-5 py-4'>
          <div className='flex items-center space-x-2'>
            {isPostLike ? <AiFillHeart className='text-xl hover:opacity-50 cursor-pointer text-red-700' onClick={handlePostLike} /> : <AiOutlineHeart className='text-xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}
            <FaRegComment  onClick={handleOpenComment}className='text-xl hover:opacity-50 cursor-pointer' />
            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
          </div>
          <div className='Cursor-pointer'>
            {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSaved} /> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSaved} />}
          </div>
        </div>
        <div className='w-full py-2 px-5 '>
          <p className='font-semibold px-5'>10 Likes</p>
          <p className='opacity-50 py-2 cursor-pointer'>View all Comments</p>
        </div>
        <div className='border border-t w-full'>
        <div className='  w-full  px-5'>
          <BsEmojiSmile/>
          <input className='Comment border-none outline-none py-.5rem py-.7rem w-[75%]' type='text' placeholder='Add a comment...' />
        </div>
        </div>
      </div>
      <CommentModel handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSaved={handleSaved} isPostLike={isPostLike}/>
    </div>
  );
};