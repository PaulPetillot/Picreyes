import React from 'react';
import Logo from '../components/Logo';
import ProfileAvatar from '../components/ProfileAvatar';
import PostWrapper from '../components/PostWrapper';
import CreatePostButton from '../components/CreatePostButton';
import './style.css'
const Home = () => (
  <div>
    <Logo/>
    <ProfileAvatar/>
    <CreatePostButton/>
    <PostWrapper/>
  </div>
);
export default Home;