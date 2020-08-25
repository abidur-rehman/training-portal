import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/vsco_logo.svg';
import { ReactComponent as UserLogo } from '../../assets/user_2.svg';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  background-color: #6CB4EE;
  justify-content: space-between;
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
  background-color: #6CB4EE;
  margin-left: 10px;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80%;
  }  
`;

export const LogoUser = styled(UserLogo)`
  display: block;
  float:left;
  width: 25%;
  background-color: #6CB4EE;
  margin-left: 10px;
  @media screen and (max-width: 800px) {
    height: 15%;
  }  
`;

export const LogoText = styled.span`
  display: block;
`;

export const LoggedInDiv = styled.div`
  display: flex;
`;

export const SingInUpDiv = styled.div`
  width: 60%;
  float: right;
`;

export const DivLeft = styled.div`
  width: 40%;
  float: left;
`;

export const MenuToggle = styled.div`
  z-index: 9999;
  width: 30px;
  height: 30px;
  transform: rotate(0deg);
  transition: all 0.25s ease-in;
  cursor: pointer;
  margin: 20px auto auto 20px;
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
  props.open ? 'all 0.25s ease-in' : 'all 0.25s ease-out'};
  } 
  span:nth-child(1) {
    top: ${(props) => (props.open ? 'calc(50% - 2px)' : '10%')};
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: ${(props) => (props.open ? 0 : 'calc(50% - 2px)')};
    left: ${(props) => (props.open ? 'calc(50% - 2px)' : null)};
    width: ${(props) => (props.open ? '4px' : null)};
    height: ${(props) => (props.open ? '100%' : null)};
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: calc(90% - 4px);
    transform-origin: left center;
    width: ${(props) => (props.open ? 0 : null)};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  @media screen and (max-width: 800px) {
    margin: 5px auto auto 5px;
  }
`;

export const  RotateContainer = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) => props.open ? 'all 0.25s ease-in-out' : 'all 0.25s ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;
