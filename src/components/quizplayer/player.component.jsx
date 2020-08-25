import React from 'react';
import { useLocation } from 'react-router-dom';
import Script from 'react-load-script'
import { PlayerContainer, NameDiv } from './player.styles.';

const Player = () => {
  const location = useLocation();
  const { state = {} } = location;
  const { item = {} } = state;

  // useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "./quizes/scrum_1/data/player.js";
    // script.async = true;
    // script.onload = () => scriptLoaded();
    //
    // document.body.appendChild(script);
  // });

  // const scriptLoaded = () => {
  //   window.A.sort();
  // }

  return (
    <PlayerContainer>
      <NameDiv>{item.name}</NameDiv>
      <Script
        url='./quizes/scrum_1/data/player.js'
        onCreate={() => { console.log('create') }}
        onError={() => { console.log('error')  }}
        onLoad={() => {
          console.log('load');
        }}
      />
    </PlayerContainer>
  );
};

export default Player;