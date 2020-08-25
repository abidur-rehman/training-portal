import React, { PureComponent } from 'react';
import {
  Pie, Cell,
} from 'recharts';

import { MainContainer, TextContainer, NameText, PieChartContainer, ChartsContainer, PieChartStyled } from './pichart.component.styles';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const COLORS = ['#00C49F', '#FFBB28'];

const dataTotal = [
  { name: 'Courses', value: 219 }
];
const dataProgress = [
  { name: 'Progress', value: 30 },
  { name: 'Courses', value: 219 }
];

const dataCompleted = [
  { name: 'Competed', value: 5 },
  { name: 'Courses', value: 219 }
];

class PiChartComponent extends PureComponent {
  render() {
    console.log(`PiChartComponent currentUser ${JSON.stringify(this.props)}`);
    return (
      <MainContainer>
        <TextContainer>
          My Dashboard
          <NameText>Hello {this.props.currentUser.name},</NameText>
        </TextContainer>
        <PieChartContainer>
          <ChartsContainer>
            <PieChartStyled width={240} height={300} onMouseEnter={this.onPieEnter}>
              <text x={130} y={200} textAnchor="middle" dominantBaseline="middle">
                219 Courses
              </text>
              <Pie
                data={dataTotal}
                cx={120}
                cy={200}
                innerRadius={70}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
              </Pie>
            </PieChartStyled>
            <PieChartStyled width={240} height={300} onMouseEnter={this.onPieEnter}>
              <text x={130} y={200} textAnchor="middle" dominantBaseline="middle">
                20 in progress
              </text>
              <Pie
                data={dataProgress}
                cx={120}
                cy={200}
                innerRadius={70}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {
                  dataProgress.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
            </PieChartStyled>
            <PieChartStyled width={240} height={300} onMouseEnter={this.onPieEnter}>
              <text x={130} y={200} textAnchor="middle" dominantBaseline="middle">
                5 completed
              </text>
              <Pie
                data={dataCompleted}
                cx={120}
                cy={200}
                innerRadius={70}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {
                  dataCompleted.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
            </PieChartStyled>
          </ChartsContainer>
        </PieChartContainer>
      </MainContainer>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(PiChartComponent);