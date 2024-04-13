import React from 'react'
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import CommentCard from './CommentCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import './Comment.css';
const CommentModel = ({onClose,isOpen,isSaved,isPostLike,handlePostLike,handleSaved}) => {
  return (
    <div>
      <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>

          <ModalBody>
            <div className=' flex h-[75vh] relative'>
              <div className='w-[45%] flex flex-col justify-center'>
                <img className='max-h-full w-full' src='https://cdn.pixabay.com/photo/2023/11/21/07/02/girl-8402582_640.jpg' alt=''></img>
              </div>
              <div className=' w-[55%] pl-10'>
                <div className='flex justify-between items-center py-5'>
                <div className='flex items-center'>
                  <div>
                    <img className='w-9 h-9 rounded-full' src='https://cdn.pixabay.com/photo/2023/07/07/13/17/flowers-8112546_640.jpg' alt=''></img>
                  </div>
                  <div className='ml-2'>
                     <p>Username</p>
                  </div>
                </div>
                <BsThreeDots/>
                </div>
                <hr />
                <div className='comment'>
                  {[1,1,1,1,1].map(()=><CommentCard/>)}
                </div>
                <div className='absolute bottom-0 w-[50%]'>
                <div className='flex justify-between items-center w-full py-4 '>
          <div className='flex items-center space-x-2'>
            {isPostLike ? <AiFillHeart className='text-xl hover:opacity-50 cursor-pointer text-red-700' onClick={handlePostLike} /> : <AiOutlineHeart className='text-xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}
            <FaRegComment  className='text-xl hover:opacity-50 cursor-pointer' />
            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
          </div>
          <div className='Cursor-pointer'>
            {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSaved} /> : <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSaved} />}
          </div>
        </div>
        <div className='w-full py-2  '>
          <p className='font-semibold px-5'>10 Likes</p>
        </div>
        <div className='border border-t w-full '>
        <div className='px-5 w-full'>
          <BsEmojiSmile/>
          <input className='Comment ' type='text' placeholder='Add a comment...' />
        </div>
        </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModel;
