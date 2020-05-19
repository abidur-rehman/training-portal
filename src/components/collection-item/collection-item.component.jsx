import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    BackgroundImage,
    AddButton,
    NameContainer,
    PriceContainer
} from './collection-items.styles';

const CollectionItem = ({ item }) => {
  const history = useHistory();
  const currentUser = useSelector(state => state.user.currentUser);
  const { name, imageUrl } = item;
  const { type } = item;
  const buttonLabel = type === 'video' ? 'Play Now' : 'Start Quiz';

  return (
      <CollectionItemContainer>
          <BackgroundImage className='image' imageUrl={imageUrl} />
          <CollectionFooterContainer>
              <NameContainer>{name}</NameContainer>
              <PriceContainer>{''}</PriceContainer>
          </CollectionFooterContainer>
        {currentUser !== null ? (
          <AddButton onClick={() => (
            type === 'video' ? (history.push({ pathname: '/play', state: { item }})) : (
              window.open(item.location, "_blank")
            )
          )} inverted>
            {buttonLabel}
          </AddButton>
        ) : (
          <AddButton onClick={() => (history.push('/signin'))} inverted>
            Sign in
          </AddButton>
        )}
      </CollectionItemContainer>
  );
};


export default CollectionItem;
