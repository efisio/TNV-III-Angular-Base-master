import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartColorServiceService } from '../../services/chart/chart-color-service.service';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75, 60], label: 'Series A' },
  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: this.chartColorServiceService.getColor('yellow-100'),
    },
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private chartColorServiceService : ChartColorServiceService) { }

  ngOnInit() {
    console.log(this.chartColorServiceService.getColor('blue-50'));
  }

}
