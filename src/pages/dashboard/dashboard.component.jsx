import React from 'react';
import { connect } from 'react-redux';
import SidebarComponent from '../../components/sidebar/sidebar.component';
import PiChartComponent from '../../components/charts/pichart.component';
import Header from '../../components/header/header.component';
import { DashboardContainer } from './dashboard.component.styles';
import MyCourses from '../../components/my-courses/my-courses.component';

const DashboardPage = (props) => {
  return (
    <>
      <Header/>
      <DashboardContainer>
        <SidebarComponent/>
        <PiChartComponent/>
        <MyCourses/>
      </DashboardContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // collection: selectCollections()
});

export default connect(mapStateToProps)(DashboardPage);
