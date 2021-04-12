import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EnabledCountry } from 'src/app/models/enabledCountry.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {

  countryDb: EnabledCountry;

  countriesDb: EnabledCountry[];

  // selectedCountry: string;
  selectedCountry?: EnabledCountry;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getEnabledCountries();
  }

  onSelect(form: NgForm) {
    //console.log(this.selectedCountry);

    // var item = this.countriesDb.filter((c) => c.countryCode === this.selectedCountry);

    var item = this.countriesDb.filter((c) => c.countryCode === this.selectedCountry.countryCode);

    // console.log('item', item[0])

    this.countryDb = item[0];
  }

  getEnabledCountries() {
    // this.selectDefaultCountry();


    this.dataService.getEnabledCountries()
      .subscribe((response: EnabledCountry[]) => {
        this.countriesDb = response;

        this.selectedCountry = this.countriesDb.find((c) => { return c.countryCode === 'IT'});
        this.countryDb = this.selectedCountry;
      })
  }

  // selectDefaultCountry() {
  //   this.countryDb = { countryCode: 'IT', countryName: 'Italia' };
  //   this.selectedCountry = this.countryDb.countryCode;
  // }

  changeCountry(event){
    // console.log('change country', event);
    this.countryDb = event;
  }


}
