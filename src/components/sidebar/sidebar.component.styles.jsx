import styled from 'styled-components';
import { ReactComponent as DashboadI } from '../../assets/dashboard.svg';
import { ReactComponent as CoursesI } from '../../assets/courses.svg';
import { ReactComponent as CoursesInI } from '../../assets/coursesIn.svg';
import { ReactComponent as CoursesCompI } from '../../assets/coursescomp.svg';
import { ReactComponent as BookmarksI } from '../../assets/bookmarks.svg';
import { ReactComponent as TestsI } from '../../assets/tests.svg';
import { ReactComponent as CertificatesI } from '../../assets/certificates.svg';
import { ReactComponent as ProfileI } from '../../assets/user.svg';

export const SidebarContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: ${(props) => (props.open ? '0' : '-100%')};
  left: 0;
  z-index: 1;
  margin-top: 90px;
  margin-left: 40px;
  background-color: #6CB4EE;
  width: 280px;
  transition: ${(props) =>
  props.open ? 'all 0.25s ease-out' : 'all 0.6s ease-out'};
  box-shadow: 0px 4px 20px -5px #e8e8e8;
  padding: 12px;
  @media screen and (max-width: 800px) {
    margin-top: 70px;
    margin-left: 10px;
  }
`;

export const SidebarContainer_old = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 240px;
  background-color: #6CB4EE;
  color: black;
  font-family: 'Open Sans', sans-serif;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  list-style: none;
  width: 100%;
  padding-inline-start: 0px
`;

export const SidebarMenuItem = styled.li`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: inset 3px 0 0 0 black;
    cursor: pointer;
}
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const DashboadIcon = styled(DashboadI)`
  width: 20px;
  height: 20px;
`;

export const CoursesIcon = styled(CoursesI)`
  width: 25px;
  height: 25px;
`;

export const CoursesInIcon = styled(CoursesInI)`
  width: 25px;
  height: 25px;
`;

export const CoursesCompIcon = styled(CoursesCompI)`
  width: 25px;
  height: 25px;
`;

export const BookmarksIcon = styled(BookmarksI)`
  width: 25px;
  height: 25px;
`;

export const TestsIcon = styled(TestsI)`
  width: 25px;
  height: 25px;
`;

export const CerficatesIcon = styled(CertificatesI)`
  width: 25px;
  height: 25px;
`;

export const ProfileIcon = styled(ProfileI)`
  width: 25px;
  height: 25px;
`;

export const SidebarMenuItemLabel = styled.p`
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 12px 15px;
  color: black;  
`;