import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDailyData } from 'src/app/models/apiDaily.model';
import { DataService } from 'src/app/services/data.service';
import { ApiCovidService } from '../../services/api-covid.service';
import { EnabledCountry } from '../../models/enabledCountry.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  styles: [`::ng-deep body{background-color: rgb(248, 248, 248, 0.8);}`]
})
export class AdminDashboardComponent implements OnInit {

  country: string;
  selectedValue: string = '';
  countriesDb: EnabledCountry[];
  message: string = null;
  errorMessage: string = null;

  username: string;



  defaultCountry = '';

  constructor(private dataService: DataService, private apiCovidService: ApiCovidService, 
    private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('currentUser') == 'Admin'){
      this.username = localStorage.getItem('currentUser');
      this.getEnabledCountries();
    }else{
      this.router.navigateByUrl('/admin');
    }
  }

  submit(form: NgForm) {


    //console.log(form.form.value.selectedValue)
    
    this.country = form.form.value.selectedValue;

    this.apiCovidService.getCountryData(this.country)
      .subscribe(response => {
        //risposta dalle apicovid
        if (response){
          //chiamiamo il nostro backend
          //ApiDailyData

          this.dataService.saveCountryData(this.country, response.data.timeline)
          .subscribe(response => {
            //risposta al salvataggio

            if (response.updated > 0){
              this.message = 'Salvati/o ' + response.updated + ' record!';
            }else{
              this.message = 'La base dati è già aggiornata!';
            }
          })
        }

      },
      (err) => {
        console.error(err);
      }
    )
  } 

  getEnabledCountries(){
    this.dataService.getEnabledCountries()
      .subscribe((response: EnabledCountry[]) => {
        this.countriesDb = response;
      },
        (err) => {
          console.error(err);
        }
      )
  }

  goToAboutUs() {
    this.router.navigateByUrl('/about');
  }

  goToHome(){
    this.router.navigateByUrl('/worldStatistics');
  }

  goToCountries(){
    this.router.navigateByUrl('/countryStatististics');
  }

}
