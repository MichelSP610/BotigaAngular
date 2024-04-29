import {Component, ViewChild} from '@angular/core';
import {NgApexchartsModule} from "ng-apexcharts";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-grafiques',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './grafiques.component.html',
  styleUrl: './grafiques.component.css'
})
export class GrafiquesComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        // {
        //   name: "My-series",
        //   data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        // }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Ventes"
      },
      xaxis: {
        // categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    }
  //   patata

  let patata = 1

  }
}
