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
        font: {
          weight: 'bold'
        },
        formatter: (value, ctx) => {
          var perc = ((value * 100) / this.totalCount).toFixed(0) + "%";
          return perc;
        },
      },
    },
  }

  colors = [
    { 
      backgroundColor: [
        'rgba(3, 226, 170, 1)', //confermati
        'rgba(55, 174, 153, 1)', //guariti
        'rgba(37, 116, 101, 1)'  //decessi
      ],
      //colore barre su hover
      hoverBackgroundColor: [
        'rgba(3, 226, 170, 0.5)', //confermati
        'rgba(55, 174, 153, 0.5)', //guariti
        'rgba(37, 116, 101, 0.5)'  //decessi
      ]
    },
  ];

  doughnutChartPlugins = [ChartDataLabels];

  doughnutChartLabels: Label[] = ['Confermati', 'Guariti', 'Decessi'];

  doughnutChartData: SingleDataSet;

  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // this.dataArrIncrementData = [];
    this.populateCharts();
  }

  populateCharts(){
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
