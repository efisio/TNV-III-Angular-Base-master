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
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  country: string;
  selectedValue: string;
  countriesDb: EnabledCountry[];
  message: string = null;
  error: string = null;

  defaultCountry = '';

  constructor(private dataService: DataService, private apiCovidService: ApiCovidService, 
    private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {


    // var isLogged = this.loginService.checkIsLogged();
    // // var isAdmin = this.loginService.checkIsAdmin();

    // console.log('loggato? ', isLogged)
    // // console.log('admin? ', isAdmin)

    this.getEnabledCountries();

    
  }

  submit(form: NgForm) {


    console.log(form.form.value.selectedValue)
    
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
            console.log(response);
            this.message = 'Salvati ' + response.updated + ' record!';

          })
        }

      },
      (err) => {
        console.error(this.error);
        this.message = 'Errore salvataggio dati.';
      }
    )
  } 

  getEnabledCountries(){
    this.dataService.getEnabledCountries()
      .subscribe((response: EnabledCountry[]) => {
        this.countriesDb = response;
      },
        (err) => {
          console.error(err)
        }
      )
  }

  goToHome(){
    this.router.navigateByUrl('/worldStatistics');
  }

}
