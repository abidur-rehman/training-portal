import React from 'react';
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
  const { name, imageUrl } = item;
  const { type } = item;
  const buttonLabel = type === 'video' ? 'Play Sample' : 'Start Quiz';

  return (
      <CollectionItemContainer>
          <BackgroundImage className='image' imageUrl={imageUrl} />
          <CollectionFooterContainer>
              <NameContainer>{name}</NameContainer>
              <PriceContainer>{''}</PriceContainer>
          </CollectionFooterContainer>
          <AddButton onClick={() => (
            type === 'video' ? (history.push({ pathname: '/play', state: { item }})) : (
              window.open(item.location, "_blank")
            )
          )} inverted>
            {buttonLabel}
          </AddButton>
      </CollectionItemContainer>
  );
};


export default CollectionItem;
