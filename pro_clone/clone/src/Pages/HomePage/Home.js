// Home Component
import React, { useState } from 'react';
import Story from '../../Component/Story/Stories';
import { HomeRight } from '../../Component/HomeRight/HomeRight';
import { PostCard } from '../../Component/Post/PostCard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css';

function Home() {
  const [showStory, setShowStory] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const data = [
    {
      image: 'https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    // Add more data objects if needed
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowStory(true);
  };

  const handleCloseModal = () => {
    setShowStory(false);
    setSelectedImage('');
  };

  return (
    <div>
      <div className='mt-10 flex w-full justify-center'>
        <div className='w-[44%] px-10'>
          <div className='Storydiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
            <button className='left-scroll'>
              <i className='fas fa-chevron-left'></i>
            </button>
            <button className='right-scroll'>
              <i className='fas fa-chevron-right'></i>
            </button>
            {data.map((item, index) => (
              <img
                key={index}
                className='stories-image'
                src={item.image}
                alt={`Image ${index}`}
                onClick={() => handleImageClick(item.image)}
              />
            ))}
          </div>
          {showStory && (
            <div className='story-viewer' onClick={handleCloseModal}>
              <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <span className='close' onClick={handleCloseModal}>
                  &times;
                </span>
                <Story user={{ id: 1, name: 'User 1', email: 'user1@example.com', imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' }} onClose={handleCloseModal} />
              </div>
            </div>
          )}

          <div className='space-y-10 w-full mt-10'>
            {[1, 2, 3].map((item) => (
              <PostCard key={item} />
            ))}
          </div>
        </div>
        <div className='w-[25%]'>
          <HomeRight />
        </div>
      </div>
    </div>
  );
}

export default Home;
