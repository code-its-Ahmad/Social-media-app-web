import React, { useState, useRef, useEffect } from 'react';
import './Profile.css';
import defaultImage from './empthy.jpg';

function ProfileUser({  posts }) {
  const [image, setImage] = useState(null);
  const imageref = useRef(null);
  const [postCount, setPostCount] = useState(0);
  const [follow, setFollowerCount] = useState(0);
  const [follower, setFollowingCount] = useState(0);

  useEffect(() => {
    setPostCount(posts.length);
  }, [posts]);

  const handleImageChange = () => {
    imageref.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const countFollowers = () => {
    setFollowerCount((prevCounts) => prevCounts + 1);
  };

  const countFollowing = () => {
    setFollowingCount((prevCounts) => prevCounts + 1);
  };

  return (
    <>
      <div className='mainuser-container'>
        <div className='profile-detaile' onClick={handleImageChange}>
          {image ? (
            <img className="UserProfilemain" src={URL.createObjectURL(image)} alt='' />
          ) : (
            <img className="UserProfilemain" src={defaultImage} alt='' />
          )}
          <input
            type='file'
            onChange={handleImageUpload}
            ref={imageref}
            style={{ display: "none" }}
          />
        </div>

        <div className='detailed'>
          <label className='profile-name'>Username</label>
          <button className='edit'>edit profile</button>
          <button className='edit'>Achieve</button>

          <select className='edit'>
            <option>setting</option>
            <option>setting</option>
            <option>setting</option>
          </select>
        </div>

        <div className='detailed1'>
          <label className='edit1' onClick={countFollowers}>{follow} followers</label>
          <label className='edit1' onClick={countFollowing}>{follower}  followings</label>
          <label className='edit1'>{postCount} posts</label>
        </div>
      </div>
    </>
  );
}

export default ProfileUser;
