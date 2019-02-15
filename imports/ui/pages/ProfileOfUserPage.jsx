import React from 'react';
import BackToHome from '../components/BackToHome';
import ProfileOfUser from '../components/ClickUserProfileCard';
import PostOfUser from '../components/PostOfUser';
const ProfileOfUserPage = () => (
  <div>
    <ProfileOfUser/>
    <BackToHome/>
    <PostOfUser/>
  </div>
);
export default ProfileOfUserPage;