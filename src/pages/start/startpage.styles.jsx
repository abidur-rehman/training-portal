import styled, { keyframes } from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';
import Image from '../../assets/tech-banner.jpg';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContainer = styled.div`
  height: 230px;
  width: 100%;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 700px) {
    height: 250px;
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
  margin: 0 auto 0 auto;
  @media screen and (max-width: 400px) {
    width: 250px;
  }
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
  @media screen and (max-width: 400px) {
    width: 30px;
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
  font-size: 40px;
  padding: 40px 20px 0 20px;
  color: #4885db; 
  @media screen and (max-width: 1200px) {
    text-align: left;
    font-size: 25px;
  }
  @media screen and (max-width: 800px) {
    text-align: left;
    font-size: 23px;
  }
  @media screen and (max-width: 400px) {
    text-align: left;
    font-size: 19px;
  }
`;

export const Text = styled.div`
  text-align: justify;
  font-size: 22px;
  padding: 0 20px 10px 20px; 
  @media screen and (max-width: 1200px) {
    text-align: left;
    font-size: 18px;
  }
  @media screen and (max-width: 800px) {
    text-align: left;
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    text-align: left;
    font-size: 14px;
  }  
`;

export const TextContainer = styled.div`
  height: 200px;
  width: 100%;
  margin-bottom: 15px;
  text-align: justify;
  font-size: 22px;
  padding: 50px 10px 0 10px;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
  @media screen and (max-width: 800px) {
    font-size: 16px;
    padding: 20px 10px 230px 10px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 20px 10px 270px 10px;
  }    
`;
