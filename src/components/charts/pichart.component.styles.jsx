import styled from 'styled-components';
import {
  PieChart,
} from 'recharts';

export const MainContainer = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  font-size: 30px;
  text-align: center;
  padding-top: 70px; 
  padding-right: 40px; 
  padding-left: 20px; 
`;

export const NameText = styled.div`
  font-size: 20px;
  text-align: center;
  padding-top: 30px ;
`;

export const PieChartContainer = styled.div`
  float: right;
`;

export const ChartsContainer = styled.div`
  display: flex;
  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
  }
`;

export const PieChartStyled = styled(PieChart)`
  > svg {
      > text {
        font-size: 21px
      }
  }
  @media screen and (max-width: 950px) {
    width: 150px !important;
    height: 150px !important;
    > svg {
      width: 150px;
      height: 200px;
        > text {
          font-size: 20px
        }
    }

  }
  @media screen and (max-width: 700px) {
    width: 100px !important;
    height: 100px !important;

    > svg {
      width: 100px;
      height: 150px;
    }
  }
`;