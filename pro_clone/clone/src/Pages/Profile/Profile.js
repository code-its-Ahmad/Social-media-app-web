import React, { useState } from 'react';
import UserPost from '../../Component/ProfileComponent/UserPost';
import ProfileUser from '../../Component/ProfileComponent/ProfileUser';

const Profile = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className='px-20'>
      <ProfileUser setPosts={setPosts} posts={posts} />
      <UserPost setPosts={setPosts} posts={posts}  />
    </div>
  );
};

export default Profile;
