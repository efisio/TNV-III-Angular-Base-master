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
        title: 'Casi Confermati',
        data: this.dailyData.confirmed,
        incremental: this.dailyData.new_confirmed,
        class: "confirmed",
        icon: 'fas fa-head-side-mask'
      }

      this.recoveredData = {
        title: 'Casi Guariti',
        data: this.dailyData.recovered,
        incremental: this.dailyData.new_recovered,
        class: "recovered",
        icon: 'fas fa-shield-virus'
      }

      this.activeData = {
        title: 'Casi Attivi',
        data: this.dailyData.active,
        class: "active",
        icon: 'fas fa-lungs-virus'
      }

      this.deathData = { 
        title: 'Decessi',
        data: this.dailyData.confirmed,
        incremental: this.dailyData.new_deaths,
        class: "deaths",
        icon: 'fa fa-virus'
      }
    },
      err => console.error(err),
      () => console.log("done loading daily data", this.dailyData)
    )
  }

}