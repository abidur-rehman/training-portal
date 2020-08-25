import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../../assets/cpd_logo.png';

export const FooterContainer = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  height: 70px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  @media screen and (max-width: 800px) {
    width: 100%;
  } 
  @media screen and (max-width: 530px) {
    font-size: 20px;
  } 
`;

export const LogoImage = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
  display: flex;
`;

export const Copyright = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: left;
  justify-content: flex-start;
  font-size: 12px;
  @media (max-width: 1800px) {
    flex-direction: column;
    width: 30%;
    padding-top: 2%;
  }
  @media screen and (max-width: 530px) {
    padding-top: 2%;
  } 
`;

export const OptionLinkContainer = styled.div`
  background-color: #6CB4EE;
  margin-top: 0.3rem;
  width: 8em;
  height: 40px;
  border-radius: 5px;
  font-color: white;
`;

export const OptionLink = styled(Link)`
  padding: 2% 2%;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  @media screen and (max-width: 530px) {
    padding: 0;
  } 
  @media screen and (max-width: 800px) {
    padding: 2% 0;
  }  
`;
