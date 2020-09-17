import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import SidebarComponent from '../../components/sidebar/sidebar.component';
import Header from '../../components/header/header.component';
import { CourseContainer, TextContainer } from './course.component.styles';
import { selectData } from '../../redux/course/course.selectors';
import CoursesOverview from '../../components/courses-overview/courses-overview.component';
import { fetchCourseData } from '../../redux/course/course.actions';

const CoursePage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  return (
    <>
      <Header/>
      <CourseContainer>
        <SidebarComponent/>
        <TextContainer>
          My Courses
        </TextContainer>
        <CoursesOverview data={props.data}/>
      </CourseContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  data: selectData(state)
});

export default connect(mapStateToProps)(CoursePage);
