import styled from 'styled-components';

export const Main = styled("div")`

`;

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.1em;
  width: 12.5em;
  padding: 0.4em 0.4em 0.4em 1em;
  box-shadow: 2px 2px 3px rgba(1.15, 0, 0, 1.15);
  font-weight: 50;
  font-size: 1rem;
  display: flex;
  @media screen and (max-width: 1100px) {
    width: 10em;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 500px) {
    width: 8em;
    font-size: 0.7rem;
  }
`;

export const Text = styled.span`
  float: left;
`;

export const ArrowDown = styled.span`
  width: 0; 
  height: 0;
  margin: 5px 0 0 auto; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #6cb4ed;
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 11.4em;
  @media screen and (max-width: 1100px) {
    width: 10em;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 500px) {
    width: 8em;
    font-size: 0.7rem;
  }
`;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  font-size: 0.9rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  @media screen and (max-width: 1100px) {
    width: 9em;
  }
  @media screen and (max-width: 500px) {
    width: 6.2em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin: 0 -0.6em 0.7em -0.6em;
  &:hover {
    color: #fd9e46;
  }
  @media screen and (max-width: 1100px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;