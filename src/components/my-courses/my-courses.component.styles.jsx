import styled from 'styled-components';

export const Styles = styled.div`
  padding: 1rem;
  @media screen and (max-width: 950px) {
    padding: 3rem;
  }
`;

export const TableStyle = styled.table`
  border-spacing: 0;
  border: 1px solid black;
  width: 100%;
  th {
    margin: 1;
    text-align: left;
    padding: 1rem;
    background-color: #6CB4EE;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
  td {
    margin: 1;
    padding: 1rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
`;

export const TRow = styled.tr`
  td {
     :first-child {
        width: 50px;
      }
      :nth-child(2) {
        width: 400px;
      }
  }
  :last-child {
    td {
      border-bottom: 0;
    }
  }
  :nth-child(even) {
    background-color: #d3d3d3;
  }
`;

export const Pagination = styled.div`
  padding: 0.5rem;
  width: 100%;
`;

export const CustomButton = styled.button`
  min-width: 40px;
  background-color: black;
  width: auto;
  height: 20px;
  letter-spacing: 0.5px;
  line-height: 20px;
  padding: 0 35px 0 35px;
  font-size: 10px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  color: white;
  cursor: pointer;
  display: inline;
  justify-content: center;
  @media screen and (max-width: 700px) {
    min-width: 5px;
    width: 5px;
    justify-content: left;
  }
`;

export const ProgressContainer = styled.div`
  height: 10px;
  width: 90%;
  background-color: #FFBB28;
  border-radius: 50px;
`;

export const ProgressFiller = styled.div`
  height: 100%;
  width: ${(props) => `${props.completed}%`};
  background-color: #00C49F;
  border-radius: inherit;
  text-align: right;
`;

export const ProgressLabel = styled.span`
  padding: 5;
  color: white;
  font-weight: bold;
`;
