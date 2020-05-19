import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { compose } from 'redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './quiz-collection.component';
import { selectIsCollectionsLoaded } from '../../redux/quiz/quiz.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const QuizCollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default QuizCollectionContainer;
