import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdPhoto } from 'react-icons/md';
import Stories from 'react-insta-stories';

const Story = ({ user }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com', imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isStoryComponentVisible, setIsStoryComponentVisible] = useState(false);

  const [stories, setStories] = useState([
    {
      url: null,
      type: 'image',
      header: {
        heading: user.name,
        subheading: user.email,
        profileImage: user.imageUrl,
      },
      seeMore: ({ close }) => (
        <div onClick={close}>Hello, click to close this.</div>
      ),
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    };

    setUsers([...users, newUser]);
  };

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setIsStoryComponentVisible(true);
  };

  const onAllStoriesEndHandler = () => {
    console.log('All stories ended');
    setIsStoryComponentVisible(false);
  };

  const storyContent = {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto',
  };

  const handleFileChange = async (file) => {
    if (file) {
      setIsLoading(true);
      try {
        const imageURL = URL.createObjectURL(file);
        const newStory = {
          url: imageURL,
          type: 'image',
          header: {
            heading: users.find((user) => user.id === selectedUserId).name,
            subheading: users.find((user) => user.id === selectedUserId).email,
            profileImage: users.find((user) => user.id === selectedUserId).imageUrl,
          },
          seeMore: ({ close }) => (
            <div onClick={close}>New story, click to close this.</div>
          ),
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setStories((prevStories) => [...prevStories, newStory]);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (selectedUserId && users.length > 0) {
      setStories((prevStories) =>
        prevStories.map((story) => {
          const user = users.find((user) => user.id === selectedUserId);
          if (user) {
            return {
              ...story,
              header: {
                heading: user.name || '',
                subheading: user.email || '',
                profileImage: user.imageUrl || '',
              },
            };
          } else {
            return story;
          }
        })
      );
    }
  }, [selectedUserId, users]);

  return (
    <div className='flex'>
      {users.map((user) => (
        <div key={user.id} className='Cursor-pointer flex-col items-center' onClick={() => handleUserClick(user.id)}>
          <img className='w-16 h-16 rounded-full' src={user.imageUrl} alt={user.name} />
        </div>
      ))}
      <div className='Cursor-pointer flex-col items-center' onClick={addUser}>
        <FaPlus className='plus-icon rounded-full bg-blue-500 text-white' />
      </div>
      {isStoryComponentVisible && (
        <>
          {isLoading && <div>Loading...</div>}
          {!isLoading && (
            <Stories
              stories={stories}
              defaultInterval={1500}
              style={{
                display: 'flex',
                justifyContent: 'center',
                background: 'red',
                cursor: 'pointer',
              }}
              storyStyles={storyContent}
              loop={false}
              keyboardNavigation={true}
              isPaused={() => {}}
              currentIndex={() => {}}
              onStoryStart={() => {}}
              onStoryEnd={() => {}}
              onAllStoriesEnd={onAllStoriesEndHandler}
            />
          )}
          <button onClick={() => document.getElementById('file-input').click()} className="icon-button">
            <MdPhoto size={20} />
          </button>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e.target.files[0])}
          />
        </>
      )}
    </div>
  );
};

export default Story;
