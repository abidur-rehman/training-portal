import React  from 'react';
import { useLocation } from "react-router-dom";
import { PlayerContainer, StyledReactPlayer, PlayerWrapper, NameDiv } from './player.styles.';

const Player = () => {
  const location = useLocation();
  const { state = {} } = location;
  const { item = {} } = state;

  return (
    <PlayerContainer>
      <NameDiv>{item.name}</NameDiv>
      <PlayerWrapper>
        <StyledReactPlayer width='70%' height='70%' url={item.videoUrl} playing controls = {true}/>
      </PlayerWrapper>
    </PlayerContainer>
  );
};

export default Player;