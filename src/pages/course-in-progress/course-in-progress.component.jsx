import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import SidebarComponent from '../../components/sidebar/sidebar.component';
import Header from '../../components/header/header.component';
import { CourseContainer, TextContainer } from './course-in-progress.component.styles';
import { selectInProgressData } from '../../redux/course/course.selectors';
import CoursesOverview from '../../components/courses-overview/courses-overview.component';
import { fetchCoursesInProgressData } from '../../redux/course/course.actions';

const CoursePage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesInProgressData());
  }, [dispatch]);

  return (
    <>
      <Header/>
      <CourseContainer>
        <SidebarComponent/>
        <TextContainer>
          Courses in Progress
        </TextContainer>
        <CoursesOverview data={props.dataInProgress}/>
      </CourseContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  dataInProgress: selectInProgressData(state)
});

export default connect(mapStateToProps)(CoursePage);
