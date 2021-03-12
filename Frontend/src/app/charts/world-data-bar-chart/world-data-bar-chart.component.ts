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
