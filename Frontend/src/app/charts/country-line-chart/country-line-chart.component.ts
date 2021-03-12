import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApiDailyData } from 'src/app/models/apiDaily.model';
import { logging } from 'protractor';

@Component({
  selector: 'app-country-line-chart',
  templateUrl: './country-line-chart.component.html',
  styleUrls: ['./country-line-chart.component.css']
})
export class CountryLineChartComponent implements OnInit {

  @Input() timelineCountryData: ApiDailyData[];


  
  public lineChartData: ChartDataSets[];

  
  public lineChartLabels: Label[];
  
  
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      labels: {
      }
    },
    plugins: {
      datalabels: {
        display: false,
      }
    },
    elements: { 
      point: 
      { 
        radius: 1 //visibilità punti nella linea
      }
    },
    scales: {
      yAxes: [
        {
          stacked: false
        }
      ]
    }
  };


  public lineChartColors: Color[] = [

    // { // test
    //   backgroundColor: 'pink',//colore sfondo area + colore label
    //   borderColor: 'red',//bordo label
    //   pointBackgroundColor: 'blue',//colore punto
    //   pointBorderColor: 'green',//colore bordo punto
    //   pointHoverBackgroundColor: 'white',//colore punto hover
    //   pointHoverBorderColor: 'black'//colore bordo punto hover
    // },

    // backgroundColor: [
    //   'rgba(3, 226, 170, 1)', //confermati
    //   'rgba(55, 174, 153, 1)', //guariti
    //   'rgba(37, 116, 101, 1)'  //decessi
    // ],
    // //colore barre su hover
    // hoverBackgroundColor: [
    //   'rgba(3, 226, 170, 0.5)', //confermati
    //   'rgba(55, 174, 153, 0.5)', //guariti
    //   'rgba(37, 116, 101, 0.5)'  //decessi
    // ]




    { // Confermati
      backgroundColor: 'rgba(3, 226, 170, 1)',
      // hoverBackgroundColor: 'rgba(3, 226, 170, 0.5)',
      borderColor: 'rgba(3, 176, 133, 0.9)',
      pointHoverRadius: 5,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointHitRadius: 8,
      pointHoverBackgroundColor: 'blue',
      pointHoverBorderColor: '#fff',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: 'blue',
      // pointHoverBorderColor: '#323d48'
    },
    { // Guariti
      backgroundColor: 'rgba(55, 174, 153, 1)',
      // hoverBackgroundColor: 'rgba(55, 174, 153, 0.5)',
      borderColor: 'rgba(43, 136, 119, 0.9)',
      pointHoverRadius: 5,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointHitRadius: 8,
      pointHoverBackgroundColor: 'green',
      pointHoverBorderColor: '#fff',
      // pointBackgroundColor: 'rgba(148,159,177,0.8)',
      // pointBorderColor: '#fff',
      // pointBorderColor: 'red',
    },
    { // Decessi
      backgroundColor: 'rgba(37, 116, 101, 1)',
      // hoverBackgroundColor: 'rgba(37, 116, 101, 0.5)',
      borderColor: 'rgba(31, 97, 85, 0.9)',
      pointHoverRadius: 5,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointHitRadius: 8,
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: '#fff',
      // pointBackgroundColor: 'rgba(148,159,177,0.8)',
      // pointBorderColor: '#fff',
      // pointHoverBorderColor: '#fff'
    }
  ];


  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  //variabili per configurare i dati della chart
  dataConfirmed: number[] = [];
  dataRecovered: number[] = [];
  dataDeath: number[] = [];
  labels: string[] = [];

  constructor() { }

  ngOnInit() {

    console.log('series: ', this.timelineCountryData);

    

    this.timelineCountryData
    .reverse()
    .forEach( (timelineItem) => {
      
      this.dataConfirmed.push(timelineItem.confirmed);
      this.dataRecovered.push(timelineItem.recovered);
      this.dataDeath.push(timelineItem.death);
      this.labels.push(timelineItem.date);

    });

    this.lineChartData= [
      { data: this.dataConfirmed, label: 'Confermati'},
      { data: this.dataRecovered, label: 'Guariti'},
      { data: this.dataDeath, label: 'Decessi'},
    ];

    this.lineChartLabels = this.labels;
  }

}
