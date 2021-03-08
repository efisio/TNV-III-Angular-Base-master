import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ApiDailyData } from 'src/app/models/apiDaily.model';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-world-data-doughnut-chart',
  templateUrl: './world-data-doughnut-chart.component.html',
  styleUrls: ['./world-data-doughnut-chart.component.css']
})
export class WorldDataDoughnutChartComponent implements OnInit {

  @Input() worldDailyData: ApiDailyData;

  totalCount : number;

  doughnutChartOptions: any = {
    responsive: true,
    cutoutPercentage: 30,
    aspectRatio: 1,
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 20,
      }
    },
    legend: {
      display: true,
    },
    title: {
      display: false,
    },
    tooltips: {
      enabled: true
    },
    plugins: {
      datalabels: {
        color: '#323d48',
        formatter: (value, ctx) => {
          var perc = ((value * 100) / this.totalCount).toFixed(0) + "%";
          return perc;
        },
      },
    },
  }

  colors = [
    { //colore barre
      backgroundColor: [
        'rgba(60, 125, 197, 1)',
        'rgba(100, 208, 113, 1)',
        // 'rgba(255, 145, 145, 1)',
        'rgba(203, 55, 44, 1)'
      ],
      //colore barre su hover
      hoverBackgroundColor: [
        'rgba(60, 125, 197, 0.8)',
        'rgba(100, 208, 113, 0.8)',
        'rgba(255, 145, 145, 0.8)',
      ]
    },
  ];

  doughnutChartPlugins = [ChartDataLabels];

  doughnutChartLabels: Label[] = ['Confermati', 'Guariti', 'Decessi'];

  doughnutChartData: SingleDataSet;

  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {

    this.totalCount = this.worldDailyData.new_confirmed +
      this.worldDailyData.new_recovered +
      this.worldDailyData.new_deaths;

    this.doughnutChartData = [
      this.worldDailyData.new_confirmed,
      this.worldDailyData.new_recovered,
      this.worldDailyData.new_deaths
    ];
    

  }

}
