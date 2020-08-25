import React from 'react';
import { useHistory } from 'react-router-dom';

import { SidebarContainer, DashboadIcon, CoursesIcon, CoursesInIcon,
  CoursesCompIcon, BookmarksIcon, TestsIcon, CerficatesIcon, ProfileIcon,
  SidebarMenu, SidebarMenuItem, SidebarMenuItemLabel } from './sidebar.component.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOpen } from '../../redux/menu/menu.actions';

const SidebarComponent = () => {
  const open = useSelector(state => state.menu.open);
  const history = useHistory();
  const dispatch = useDispatch();
  const goToPage = (page) => {
    history.push(page);
    dispatch(setMenuOpen(false));
  }
  return (
    <SidebarContainer open={open}>
      <SidebarMenu>
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
      </SidebarMenu>
    </SidebarContainer>
  );
}
export default SidebarComponent;