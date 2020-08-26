import styled, { keyframes } from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContainer = styled.div`
  height: 200px;
  width: 100%;
  background-color: #ffe338;
  border-width: 0.5px;
  border-style: solid;
  @media screen and (max-width: 700px) {
    height: 250px;
    font-size: 15px;
  }  
`;

export const TextContainer = styled.div`
  height: 200px;
  width: 100%;
  border-width: 0.5px;
  border-color: black;
  border-style: solid;
  margin-bottom: 15px;
  text-align: justify;
  font-size: 22px;
  padding: 10px;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }  
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }  
`;

export const InfoContainerText = styled.div`
  color: black;
  font-size: 40px;
  text-align: center;
  padding-top: 60px;
`;

export const ButtonContainer = styled(CustomButton)`
  margin: 150px auto;
`;

export const LinkContainer = styled.div`
  width: 350px;
  margin: 10px auto 0px auto;
`;

export const LinkItem = styled.button`
  background-color: grey;
  margin-right: 7px;
  width: 45px;
  height: 10px;
  color: white;
  &:focus {
    background-color: black;
  }
  &.greyBackground {
    background-color: grey;
  }
  &.blackBackground {
    background-color: black;
  }
`;

export const Message = styled.div`
  font-size: 25px;
  padding: 10% 0 0 30%;
  @media screen and (max-width: 800px) {
    padding: 10%;
    text-align: center;
  }
`;

export const FadeIn = keyframes`
  0% { opacity: 0 }
  30% { opacity: 0.3 }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const Animate = styled.div`
  height: 95%;
  width: 100%;
  border-color: black;
  animation-duration: 3s;
  animation-name: ${FadeIn};
`;

export const HeaderText = styled.div`
  text-align: justify;
  font-size: 22px;
  padding: 40px 0 0 10px;
  color: blue; 
`;

export const Text = styled.div`
  text-align: justify;
  font-size: 20px;
  padding: 0 10px 10px 10px; 
`;
