import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/section/section.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import DashboardPage from './dashboard.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const DashboardPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(DashboardPage);

export default DashboardPageContainer;
