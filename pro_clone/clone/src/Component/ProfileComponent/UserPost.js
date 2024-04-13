import React, { useState } from 'react';
import { AiOutlineCamera, AiOutlineSave, AiOutlineTable, AiOutlineUser } from 'react-icons/ai';
import { RiVideoLine } from 'react-icons/ri';
import './UserPost.css';
import ImagePopup from './ImagePopup';

const UserPost = ({ posts, setPosts, isEditMode }) => {
  const [activeTab, setActiveTab] = useState('Post');
  const [images, setImages] = useState([]);
  const [popupImageUrl, setPopupImageUrl] = useState(null);

  const tabs = [
    { tab: 'Post', icons: <AiOutlineTable /> },
    { tab: 'Reel', icons: <RiVideoLine /> },
    { tab: 'Saved', icons: <AiOutlineSave /> },
    { tab: 'Tagged', icons: <AiOutlineUser /> },
  ];

  const handlePostUpload = (file) => {
    if (file) {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: prevPosts.length + 1, image: URL.createObjectURL(file), likes: 0, comments: 0 },
      ]);
    }
  };

  const handleInteraction = (postId, interactionType) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, [interactionType]: post[interactionType] + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleImageClick = (imageUrl) => {
    setPopupImageUrl(imageUrl);
  };

  const handleCloseImagePopup = () => {
    setPopupImageUrl(null);
  };

  return (
    <div className="user-post-container">
      <div className="user-post-tabs">
        {tabs.map((item) => (
          <div
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            className={`user-post-tab ${activeTab === item.tab ? 'active' : 'inactive'}`}
          >
            {item.icons}
            <p>{item.tab}</p>
          </div>
        ))}
      </div>
      <div className="user-post-content">
        {activeTab === 'Post' && posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <img src={post.image} alt={`post-${post.id}`} onClick={() => handleImageClick(post.image)} />
              <p className='like'>Likes: {post.likes}</p>
              <p className='commit'>Comments: {post.comments}</p>
              <div>
                <button onClick={() => handleInteraction(post.id, 'likes')}>Like</button>
                <button onClick={() => handleInteraction(post.id, 'comments')}>Comment</button>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
      {!isEditMode && (
        <div>
          <input
            type="file"
            id="post-picture"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => handlePostUpload(e.target.files[0])}
          />
          <label htmlFor="post-picture" className="upload-button">
            <AiOutlineCamera />
          </label>
        </div>
      )}

      <div>
        <div className="parent-container">
          {images.map((image) => (
            <div key={image.id} className="child-container">
              <img
                src={image.src}
                alt={`/`}
                onClick={() => handleImageClick(image.src)}
              />
            </div>
          ))}
        </div>
      </div>

      {popupImageUrl && (
        <ImagePopup imageUrl={popupImageUrl} onClose={handleCloseImagePopup} />
      )}
    </div>
  );
};

export default UserPost;