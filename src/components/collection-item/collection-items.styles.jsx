import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  
  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    font-size: 13px;
  } 
  @media screen and (max-width: 600px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    font-size: 12px;
  }  
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 350px 330px;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  @media screen and (max-width: 1400px) {
    background-position: center;
    background-size: 250px 330px;
  } 
  @media screen and (max-width: 1200px) {
    background-position: center;
    background-size: 250px 330px;
  } 
  @media screen and (max-width: 800px) {
    background-position: center;
    background-size: 280px 330px;
  } 
  @media screen and (max-width: 600px) {
    background-position: center;
    background-size: 230px 330px;
  }   
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 100%;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
  font-size: 12px;
  font-weight: bold;
`;
