import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDaily, ApiDailyData } from 'src/app/models/apiDaily.model';
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


  countryCode: string;

  timelineData: ApiDaily;
  dailyData: ApiDailyData;

  deathData: StatisticalCard;
  newDeathsData: StatisticalCard;
  activeData: StatisticalCard;
  confirmedData: StatisticalCard;
  newConfirmedData: StatisticalCard;
  recoveredData: StatisticalCard;
  newRecoveredData: StatisticalCard;

  timelineDataSeries: ApiDailyData[];

  ngOnInit(): void {

    // console.log(this.loginService.getUsers())
    // var isLogged = this.loginService.checkIsLogged();
    // // var isAdmin = this.loginService.checkIsAdmin();

    // console.log('loggato? ', isLogged)
    // console.log('admin? ', isAdmin)

    //check login
    // if (!this.loginService.checkIsLogged()) {
    //   //redirect a pagina di login
    //   this.router.navigate(['/login']);
    // } else {

    //TODO da prendere dallo user
    this.countryCode = 'IT';

    // if (this.loginService.getCurrentUser()){
    //   this.countryCode = this.loginService.getCurrentUser().lang;
    // }else{
    //     this.countryCode = 'IT';
    // }

    this.dataService.getTimelineDataByCountrycode(this.countryCode)
      .subscribe((timelineArray: ApiDailyData[]) => {

        this.timelineDataSeries = Object.assign([], timelineArray);

        //nella risposta dal DB ottengo un array ordinato per data
        //indice zero ho la data più recente
        this.dailyData = Object.assign({},timelineArray[0]);

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





    // }//chiusura if login


  }
}
