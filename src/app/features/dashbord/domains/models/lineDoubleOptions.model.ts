import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis } from "ng-apexcharts";

export interface lineDoubleOptions{
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
}
