import styled from 'styled-components';
import ReactPlayer from 'react-player'


export const PlayerContainer = styled.div`
`;

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 5%;
  left: 5%;
`;

export const NameDiv = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-left: 30%;
`;
