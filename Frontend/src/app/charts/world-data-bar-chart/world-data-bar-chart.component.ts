import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ApiDaily, ApiDailyData } from 'src/app/models/apiDaily.model';
// import * as pluginDataLabels from 'chartjs-plugin-labels';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-world-data-bar-chart',
  templateUrl: './world-data-bar-chart.component.html',
  styleUrls: ['./world-data-bar-chart.component.css']
})
export class WorldDataBarChartComponent implements OnInit {

  @Input() worldDailyData: ApiDailyData;

  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        align: "right", 
        color: '#323d48',
        font: {
          weight: 'bold'
        },
      }
    },
    tooltips:{
      enabled: true,
      bodyAlign: 'right'
    }, 
    scales: {
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Eventi",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Numero di casi",
          },
        },
      ],
    },
  };
  
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
    // { //second dataset colors, for each bar
    //   backgroundColor: [
    //     'rgba(255, 0, 0, 0.5)',
    //     'rgba(0, 0, 255, 0.5)',
    //     'rgba(0, 255, 0, 0.5)',
    //   ]
    // }
  ];
  
  barChartPlugins = [ChartDataLabels];

  barChartLabels: Label[] = ['Confermati', 'Guariti', 'Decessi'];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;

  barChartData: ChartDataSets[];
  chartLabels: any;
  dataArrTotalData : number[] = [];
  dataArrIncrementData: number[] = [];

  constructor() { }

  ngOnInit() {
    // console.log('dati in arrivo', this.worldDailyData);

    //creazione dei dataset

    //set dati incrementi
    this.dataArrIncrementData.push(this.worldDailyData.new_confirmed);
    this.dataArrIncrementData.push(this.worldDailyData.new_recovered);
    this.dataArrIncrementData.push(this.worldDailyData.new_deaths);

    this.barChartData = [
      {
        data: this.dataArrIncrementData, 
        backgroundColor: 'rgb(99 174 210 / 65%)',
        // borderColor: '#1E88E5', 
        // borderColor: 'red', //nella popup
        label: 'Incremento giornaliero' 
      }
    ];

  }
}
