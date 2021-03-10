import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDailyData } from 'src/app/models/apiDaily.model';
import { DataService } from 'src/app/services/data.service';
import { ApiCovidService } from '../../services/api-covid.service';
import { EnabledCountry } from '../../models/enabledCountry.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  country: string;
  selectedValue: string;
  countriesDb: EnabledCountry[];

  constructor(private dataService: DataService, private apiCovidService: ApiCovidService, private router: Router) { }

  ngOnInit(): void {
    this.getEnabledCountries();

    
  }

  filterByCountry(form: NgForm) {
    // this.country = form.form.value.country;
    this.country = this.selectedValue;

    if (this.country) {
      console.log(this.country);

    }
    //TODO  gestire se non seleziono qualcosa 

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

            // fai qualcosa

          })
        }

      },
      (err) => {
        console.error(err)
      }
    )
  } 

  getEnabledCountries(){
    this.dataService.getEnabledCountries()
      .subscribe((response: EnabledCountry[]) => {
        this.countriesDb = response;
      })
  }

}
