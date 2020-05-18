import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/myLogo.svg';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 530px) {
    height: 60px;
    padding: 5px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 90px;
  margin-top: 20px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
    margin-top: 5px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  @media screen and (max-width: 530px) {
    width: 90%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const LogoUpdated = styled(Logo)`
  width: 50%;
  height: 50%;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80%;
  }  
`;


export const LoggedInDiv = styled.div`
  display: flex;
`;