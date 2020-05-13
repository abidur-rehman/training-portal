import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSectionData } from '../../redux/section/section.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { SectionPageContainer } from './section.styles';

const SectionPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSectionData());
  });

  return (
    <SectionPageContainer>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
    </SectionPageContainer>
  );
}

export default SectionPage;
