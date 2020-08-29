import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from '../../assets/cpd_logo.png';

export const FooterContainer = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  height: 70px;
  height: 50px;
  display: flex;
  background-color: #6CB4EE;
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
  width: 40px;
  height: 40px;
  display: flex;
  margin: 3px 0px 3px 3px;
  @media screen and (max-width: 530px) {
    margin-top: 5px;
  } 
  @media screen and (max-width: 400px) {
    margin-top: 8px;
  } 
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

export const OptionContainer = styled.div`
  display: flex;
  background-color: #6CB4EE;
  width: 90%;
`;

export const OptionLinkContainer = styled.div`
  background-color: #6CB4EE;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  width: 8em;
  height: 40px;
  border-radius: 5px;
  font-color: white;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  } 
  @media screen and (min-width: 900px) {
    margin: 0 auto;
  } 
`;

export const OptionLink = styled(Link)`
  padding: 2% 2%;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
  @media screen and (max-width: 530px) {
    padding: 0;
  } 
  @media screen and (min-width: 900px) {
    font-size: 13px;
  } 
`;
