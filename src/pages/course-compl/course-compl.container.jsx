import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsDataLoaded } from '../../redux/course/course.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CoursePage from './course-compl.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsDataLoaded(state)
});

const CoursesPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CoursePage);

export default CoursesPageContainer;
