import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 3% auto;
  display: flex;
  flex-flow: row wrap;
`;

export const ProfileFormContainer = styled.div`
  margin-right: 5%
`;

export const PassFormContainer = styled.div`
  margin-right: 5%
`;

export const ProfileTitleContainer = styled.div`
  background-color: #6CB4EE;
  margin-top: 0.3rem;
  width: 10em;
  height: 50px;
  border-radius: 5px;
`;

export const ProfleDataContainer = styled.div`
  margin-top: 3rem;
`;

export const ProfileTitle = styled.h2`
  padding: 0.6rem;
`;

export const ErrorMessageContainer = styled.div`
  color: red;
  margin-top: 1%;
  font-size: 20px;
  text-align: left;
`;

export const MessageContainer = styled.div`
  color: green;
  margin-top: 1%;
  font-size: 20px;
  text-align: left;
`;

export const NameDiv = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 2%;
  @media screen and (max-width: 800px) {
    padding-left: 5px;
  }  
`;
