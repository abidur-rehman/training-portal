import React from 'react';
import { useHistory } from 'react-router-dom';

import { SidebarContainer, DashboadIcon, CoursesIcon, CoursesInIcon, HomeIcon,
  CoursesCompIcon, BookmarksIcon, TestsIcon, CerficatesIcon, ProfileIcon, LogoutIcon,
  SidebarMenu, SidebarMenuItem, SidebarMenuItemLabel } from './sidebar.component.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOpen } from '../../redux/menu/menu.actions';
import { setCurrentUser } from '../../redux/user/user.actions';

const SidebarComponent = () => {
  const open = useSelector(state => state.menu.open);
  const history = useHistory();
  const dispatch = useDispatch();
  const goToPage = (page) => {
    history.push(page);
    dispatch(setMenuOpen(false));
  }
  const doLogout = () => {
    history.push('/');
    dispatch(setCurrentUser(null));
    dispatch(setMenuOpen(false));
  }
  return (
    <SidebarContainer open={open}>
      <SidebarMenu>
        <SidebarMenuItem>
          <HomeIcon/>
          <SidebarMenuItemLabel onClick={() => goToPage('/')}>Home</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <DashboadIcon/>
          <SidebarMenuItemLabel onClick={() => goToPage('/dashboard')}>Dashboard</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <CoursesIcon/>
          <SidebarMenuItemLabel onClick={() => goToPage('/courses')}>Courses</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <CoursesInIcon/>
          <SidebarMenuItemLabel>Courses in progress</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <CoursesCompIcon/>
          <SidebarMenuItemLabel>Courses completed</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <BookmarksIcon/>
          <SidebarMenuItemLabel>Bookmarks</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <TestsIcon/>
          <SidebarMenuItemLabel>Tests</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <CerficatesIcon/>
          <SidebarMenuItemLabel>Certificates</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <ProfileIcon/>
          <SidebarMenuItemLabel onClick={() => goToPage('/profile')}>My profile</SidebarMenuItemLabel>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <LogoutIcon/>
          <SidebarMenuItemLabel onClick={() => doLogout()}>Logout</SidebarMenuItemLabel>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
}
export default SidebarComponent;