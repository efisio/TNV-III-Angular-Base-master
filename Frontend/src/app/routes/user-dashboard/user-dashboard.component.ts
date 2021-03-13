import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDaily, ApiDailyData } from 'src/app/models/apiDaily.model';
import { EnabledCountry } from 'src/app/models/enabledCountry.model';
import { StatisticalCard } from 'src/app/models/statisticalCard.model';
import { ApiCovidService } from 'src/app/services/api-covid.service';
import { LoginService } from 'src/app/services/login.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  constructor(private dataService: DataService, private loginService: LoginService, private router: Router) { }


  // @Input() countryCode: string;{countryCode: 'IT', countryName: 'Italia'}
  @Input() country: EnabledCountry;

  countriesDb: EnabledCountry[];

  // selectedValue: string;

  timelineData: ApiDaily;
  dailyData: ApiDailyData;
  showStatistics: boolean = false;

  deathData: StatisticalCard;
  newDeathsData: StatisticalCard;
  activeData: StatisticalCard;
  confirmedData: StatisticalCard;
  newConfirmedData: StatisticalCard;
  recoveredData: StatisticalCard;
  newRecoveredData: StatisticalCard;

  timelineDataSeries: ApiDailyData[];

  ngOnInit(): void {
  }

  ngOnChanges() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'Input variable'**************/
    this.showStatistics = false;
    this.populateCharts();
  }

  populateCharts(){

    this.dataService.getTimelineDataByCountrycode(this.country.countryCode)
      .subscribe((timelineArray: ApiDailyData[]) => {

        //controllo sulla presenza dei dati
        if (timelineArray.length > 0) {
          this.showStatistics = true;
        }

        this.timelineDataSeries = Object.assign([], timelineArray);

        //nella risposta dal DB ottengo un array ordinato per data
        //indice zero ho la data più recente
        this.dailyData = Object.assign({}, timelineArray[0]);

        // console.log('onchange-> ', this.country.countryCode,this.dailyData);

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
          data: this.dailyData.death,
          incremental: this.dailyData.new_deaths,
          class: "deaths",
          icon: 'fa fa-virus'
        }

      },
        err => console.error(err),
        () => console.log("done loading timeline data")
      );
  }
  
}
