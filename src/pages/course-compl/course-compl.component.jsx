import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import SidebarComponent from '../../components/sidebar/sidebar.component';
import Header from '../../components/header/header.component';
import { CourseContainer, TextContainer } from './course-compl.component.styles';
import { selectComplData } from '../../redux/course/course.selectors';
import CoursesOverview from '../../components/courses-overview/courses-overview.component';
import { fetchCoursesComplData } from '../../redux/course/course.actions';

const CoursePage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesComplData());
  }, [dispatch]);

  return (
    <>
      <Header/>
      <CourseContainer>
        <SidebarComponent/>
        <TextContainer>
          Courses Completed
        </TextContainer>
        <CoursesOverview data={props.dataCompl}/>
      </CourseContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  dataCompl: selectComplData(state)
});

export default connect(mapStateToProps)(CoursePage);
