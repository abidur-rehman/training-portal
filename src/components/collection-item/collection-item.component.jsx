import React from 'react';
import { useHistory } from "react-router-dom";

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    BackgroundImage,
    AddButton,
    NameContainer,
} from './collection-items.styles';

const CollectionItem = ({ item }) => {
  const history = useHistory();
  const { name, imageUrl } = item;
  const { type } = item;
  const buttonLabel = type === 'video' ? 'Play Sample' : type === 'pdf' ? 'Sample PDF' : 'Sample Quiz';

  return (
      <CollectionItemContainer>
          <BackgroundImage className='image' imageUrl={imageUrl} />
          <CollectionFooterContainer>
              <NameContainer>{name}</NameContainer>
          </CollectionFooterContainer>
          <AddButton onClick={() => (
            type === 'video' ? (history.push({ pathname: '/play', state: { item, videoType: 'Sample' }})) : (
              history.push({ pathname: '/quizPlayer', state: { item }})
            )
          )} inverted>
            {buttonLabel}
          </AddButton>
      </CollectionItemContainer>
  );
};


export default CollectionItem;
