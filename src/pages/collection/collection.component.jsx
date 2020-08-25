import React from 'react';
import { connect, useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';


import {
  CollectionPageContainer,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = (props) => {
  const collections = useSelector(state => state.section.collections);
  const { java = {}} = collections;
  const { items = []} = java;
  return (
    <CollectionPageContainer>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // collection: selectCollections()
});

export default connect(mapStateToProps)(CollectionPage);
