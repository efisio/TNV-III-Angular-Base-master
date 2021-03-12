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
        radius: 0 //visibilità punti nella linea
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




    { // Confermati
      backgroundColor: '#37ae99',
      // borderColor: 'yellow',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderWidth: 2,
      pointBorderWidth: 1,
      pointHoverRadius: 4,
      // pointHoverBorderColor: '#323d48'
    },
    { // Guariti
      // backgroundColor: 'rgba(255,0,0,1)',
      backgroundColor: '#257465',
      // borderColor: 'blue',
      // pointBackgroundColor: 'rgba(148,159,177,0.8)',
      // pointBorderColor: '#fff',
      // pointBorderColor: 'red',
      pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: '#fff'
    },
    { // Decessi
      // backgroundColor: 'rgba(255,0,0,1)',
      backgroundColor: '#257465',
      // borderColor: 'red',
      // pointBackgroundColor: 'rgba(148,159,177,0.8)',
      // pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
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
      { data: this.dataConfirmed, label: 'Confermati', fill: '1' },
      { data: this.dataRecovered, label: 'Guariti', fill: '-1' },
      { data: this.dataDeath, label: 'Decessi', fill: '-1' },
    ];

    this.lineChartLabels = this.labels;
  }

}
