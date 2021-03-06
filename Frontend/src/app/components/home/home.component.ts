import { Component, OnInit } from '@angular/core';
import { ApiDaily, ApiDailyData } from 'src/app/models/apiDaily.model';
import { StatisticalCard } from 'src/app/models/statisticalCard.model';
import { ApiCovidService } from 'src/app/services/api-covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiCovidService) { }

  timelineData: ApiDaily;
  dailyData: ApiDailyData;

  deathData: StatisticalCard;
  newDeathsData: StatisticalCard;
  activeData: StatisticalCard;
  confirmedData: StatisticalCard;
  newConfirmedData: StatisticalCard;
  recoveredData: StatisticalCard;
  newRecoveredData: StatisticalCard;

  ngOnInit(): void {

    this.apiService.getDailyData().subscribe((data: ApiDaily) => {
      this.timelineData = data;

      this.dailyData = this.timelineData.data[0];

      /* set dei dati per le cards */
      this.confirmedData = {
        title: 'Confirmed',
        data: this.dailyData.confirmed,
        class: "confirmed",
        icon: 'fas fa-head-side-mask'
      }

      this.recoveredData = {
        title: 'Recovered',
        data: this.dailyData.recovered,
        class: "recovered",
        icon: 'fas fa-procedures'
      }

      this.activeData = {
        title: 'Active',
        data: this.dailyData.active,
        class: "active",
        icon: 'fas fa-virus'
      }

      this.deathData = { 
        title: 'Deaths',
        data: this.dailyData.confirmed,
        class: "deaths",
        icon: 'fa fa-skull-crossbones'
      }
    },
      err => console.error(err),
      () => console.log("done loading daily data", this.dailyData)
    )
  }

}