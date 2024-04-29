import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgApexchartsModule} from "ng-apexcharts";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { firstValueFrom } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-grafiques',
  standalone: true,
  imports: [NgApexchartsModule, HttpClientModule],
  templateUrl: './grafiques.component.html',
  styleUrl: './grafiques.component.css'
})
export class GrafiquesComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  constructor(private http: HttpClient, private router: Router) {
    if (sessionStorage.getItem('username') !== 'admin') {
      this.router.navigate([''])
    }
    this.chartOptions = {
      series: [
        {
          name: "",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Ventes de Cada producte"
      },
      xaxis: {
        categories: []
      }
    }

    this.chartOptions2 = {
      series: [
        {
          name: "",
          data: []
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      title: {
        text: "Ventes en oferta"
      },
      xaxis: {
        categories: []
      }
    }

    this.chartOptions.xaxis = {
      categories: this.getUltims7Dies()
    }
    this.chartOptions2.xaxis = {
      categories: this.getUltims7Dies()
    }

    this.getSeriesForChart().then((data) => {
      //@ts-ignore
      this.chartOptions.series = data
    })

    this.getSeriesForChartOferta().then((data) => {
      //@ts-ignore
      this.chartOptions2.series = data
    })
  }

  getUltims7Dies() {
    let date = new Date()

    let daysAgo6 = new Date();
    daysAgo6.setDate(daysAgo6.getDate() - 6)

    let daysAgo5 = new Date();
    daysAgo5.setDate(daysAgo5.getDate() - 5)

    let daysAgo4 = new Date();
    daysAgo4.setDate(daysAgo4.getDate() - 4)

    let daysAgo3 = new Date();
    daysAgo3.setDate(daysAgo3.getDate() - 3)

    let daysAgo2 = new Date();
    daysAgo2.setDate(daysAgo2.getDate() - 2)

    let daysAgo1 = new Date();
    daysAgo1.setDate(daysAgo1.getDate() - 1)

    let dates = [];

    let parseDates: string[] = []

    dates.push(daysAgo6)
    dates.push(daysAgo5)
    dates.push(daysAgo4)
    dates.push(daysAgo3)
    dates.push(daysAgo2)
    dates.push(daysAgo1)
    dates.push(date)

    dates.forEach(date => {
      let parsedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      parseDates.push(parsedDate)
    });

    return parseDates;
  }

  async getSeriesForChart() {
    let series = await firstValueFrom(this.http.get('http://localhost:3080/productesVenutsSemana')).then((data) => {
      return data;
    })
    return series;
    
  }

  async getSeriesForChartOferta() {
    let series = await firstValueFrom(this.http.get('http://localhost:3080/productesVenutsEnOferta')).then((data) => {
      return data;
    })
    return series;
    
  }
}
