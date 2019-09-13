import React, { Component }  from 'react';
import {drawChart, createPieChartConfig} from '@pxblue/chartjs';

export default class PieDemo extends Component {
   render() {
      return (
         <div>
            <canvas id="pieChart"></canvas>
         </div>
      );
   }

   componentDidMount() {
      drawChart(createPieChartConfig(), 'pieChart');
      const chart = createPieChartConfig();
      chart.data = undefined;
      chart.data!.labels = ['Mon', 'Wed', 'Fri'];
   }
}
