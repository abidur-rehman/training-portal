import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PlayerContainer, StyledReactPlayer, PlayerWrapper, NameDiv } from './player.styles.';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import SidebarComponent from '../sidebar/sidebar.component';
import { updateUserCourse, updateTimeSpend } from '../../redux/course/course.actions';

const Player = () => {
  const player = useRef();
  const dispatch = useDispatch();
  const [seeking, setSeeking] = useState(false);
  // const [progress, setProgress] = useState(0);
  const [playedStr, setPlayedStr] = useState('')
  // const [totalTimeStr, setTotalTimeStr] = useState('')
  const location = useLocation();
  const { state = {} } = location;
  const { item = {} , selectedOption, videoType = '' } = state;

  useEffect(() => {
    return () => {
      if (videoType !== 'Sample') {
        dispatch(updateUserCourse(item));
      }
    };
  }, []);

  const handleReady = event => {
    if (player.current && item.timeSpent && selectedOption === 'Continue') {
      setSeeking(true)
      const tt = item.timeSpent.split(':');
      const seconds = tt[0] * 3600 + tt[1] * 60 + tt[2] * 1;
      player.current.seekTo(seconds);
      setTimeout(() => setSeeking(false), 800)
    } else if (selectedOption === 'Start from beginning') {
      setSeeking(true)
      player.current.seekTo(0);
      setTimeout(() => setSeeking(false), 800)
    }
  };

  const GetTimeStr = (n : number)=> {
    return new Date(n * 1000).toISOString().substr(11, 8);
    // let sec = ('0' + Math.floor(n % 60).toString()).slice(-2) // prepend 0 if necessary
    // return Math.floor(n / 60).toString() + ':' + sec
  }

  const handleProgress = (state: { played: number, playedSeconds: number, loaded: number, loadedSeconds: number }) => {
    if(seeking) return
    setPlayedStr(GetTimeStr(state.playedSeconds))
    // setTotalTimeStr(GetTimeStr(state.loadedSeconds))
    // setProgress(state.played);
    if (videoType !== 'Sample') {
      dispatch(updateTimeSpend(playedStr));
    }
  }

  return (
    <>
      <Header/>
      <PlayerContainer>
        <SidebarComponent/>
        <NameDiv>{item.name}</NameDiv>
        <PlayerWrapper>
          <StyledReactPlayer width='70%' height='70%' onStart={handleReady} onProgress={handleProgress} url={item.videoUrl}
                             progressInterval={1900} ref={player} playing controls = {true}/>
        </PlayerWrapper>
      </PlayerContainer>
      <Footer/>
    </>
  );
};

export default Player;