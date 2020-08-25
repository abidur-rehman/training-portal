import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/section/section.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ProfilePage from './profile.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const ProfilePageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProfilePage);

export default ProfilePageContainer;
