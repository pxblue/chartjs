/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import {ChartConfiguration} from "chart.js";
import {pxbBarChartData, pxbBarChartLabels, pxbBarChartOptions} from './config/pxb-barchart-config';
import {pxbDonutChartData, pxbDonutChartLabels, pxbDonutChartOptions} from './config/pxb-donut-config';
import {pxbLineChartData, pxbLineChartLabels, pxbLineChartOptions} from './config/pxb-linechart-config';
import {pxbPieChartData, pxbPieChartLabels, pxbPieChartOptions} from './config/pxb-piechart-config';
import {OpenSans} from "./util/styles";
import Chart = require("chart.js");
// @ts-ignore
import deepcopy = require("deepcopy");

/* This is a Utility wrapper around ChartJS that creates graph configurations with Eaton themes. */
export function createBarChartConfig(): ChartConfiguration {
   return deepcopy({
      type: 'bar',
      data: {
         labels: pxbBarChartLabels,
         datasets: pxbBarChartData,
      },
      options: pxbBarChartOptions
   });
}

export function createPieChartConfig(): ChartConfiguration {
   return deepcopy({
      type: 'pie',
      data: {
         labels: pxbPieChartLabels,
         datasets: pxbPieChartData
      },
      options: pxbPieChartOptions
   });
}

export function createLineChartConfig(): ChartConfiguration {
   return deepcopy({
      type: 'line',
      data: {
         labels: pxbLineChartLabels,
         datasets: pxbLineChartData
      },
      options: pxbLineChartOptions,
   });
}

export function createDonutChartConfig(): ChartConfiguration {
   return deepcopy({
      type: 'doughnut',
      data: {
         labels: pxbDonutChartLabels,
         datasets: pxbDonutChartData
      },
      options: pxbDonutChartOptions,
   });
}

export function drawChart(config: ChartConfiguration, id: string): Chart {
   Chart.defaults.global.defaultFontFamily = OpenSans;
   const ctx = (document.getElementById(id) as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
   return new Chart(ctx, config);
}
