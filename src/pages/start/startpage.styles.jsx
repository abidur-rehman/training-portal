import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContainer = styled.div`
  height: 400px;
  width: 100%;
  background-color: #ffe338;
  margin-bottom: 15px;
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

export const Message = styled.div`
  font-size: 25px;
  padding: 10% 0 0 30%;
  @media screen and (max-width: 800px) {
    padding: 10%;
    text-align: center;
  }
`;