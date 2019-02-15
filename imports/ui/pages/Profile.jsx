import React from 'react';
import Logo from '../components/Logo';
import ProfileInfo from '../components/ProfileCard';
import ProfilePosts from '../components/ProfilePosts';
import BackToHome from '../components/BackToHome';
import './style.css'
const Profile = () => (
  <div>
    <ProfileInfo/>
    <BackToHome/>
    <ProfilePosts/>
  </div>
);
export default Profile;