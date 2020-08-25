import React from 'react';
import Header from '../../components/header/header.component';
import { ProfileContainer } from './profile.component.styles';
import SidebarComponent from '../../components/sidebar/sidebar.component';
import ProfileComponent from '../../components/profile/profile.component';

const ProfilePage = () => {
  return (
    <>
      <Header/>
      <ProfileContainer>
        <SidebarComponent/>
        <ProfileComponent/>
      </ProfileContainer>
    </>
  );
};

export default ProfilePage;
