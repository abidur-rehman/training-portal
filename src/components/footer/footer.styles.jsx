import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  height: 70px;
  width: 98%;
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

export const Copyrightt = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
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

export const OptionLink = styled(Link)`
  padding: 2% 2%;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  @media screen and (max-width: 530px) {
    padding: 0;
  } 
  @media screen and (max-width: 800px) {
    padding: 2% 0;
  }  
`;
