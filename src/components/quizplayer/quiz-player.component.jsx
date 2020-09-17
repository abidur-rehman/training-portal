import React from 'react';
import { PlayerContainer, IFrameContainer } from './quiz-player.component.styles';
import Header from '../header/header.component';
import SidebarComponent from '../sidebar/sidebar.component';

const getFrameDetails = (add) => {
  return `<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src=${add}></iframe>`
}

function Iframe(props) {
  return (
    <IFrameContainer dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}/>
  );
}

const QuizPlayer = ({ location }) => {
  const { state: { item: { location: address } }} = location;
  console.log(`QuizPlayer props ${JSON.stringify(address)}`);
  return (
    <>
      <Header/>
      <PlayerContainer>
        <SidebarComponent/>
        <Iframe iframe={getFrameDetails(address)} allow="autoplay" />,
      </PlayerContainer>
    </>
  );
}

export default QuizPlayer;