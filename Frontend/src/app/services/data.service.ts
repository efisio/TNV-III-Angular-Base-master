import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidData } from '../models/data.model';
import { ApiDaily } from '../models/apiDaily.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'http://localhost:3000';

  constructor( private http : HttpClient) { }

  getData () {
    return this.http.get<Array<CovidData>>(this.baseURL + "/data/")
  }

  getEntry( id ) {
    return this.http.get<CovidData>(this.baseURL + "/data/" + id)
  }

  addEntry = (data: CovidData) => {
    return this.http.post<CovidData>(this.baseURL + "/data/", {
      "country": data.country,
      "population": data.population,
      "cases": data.cases,
      "deaths": data.deaths,
      "recoveries": data.recoveries,
      "recoveryRate": data.recoveryRate,
      "fatalityRate": data.fatalityRate,
      "continent": data.continent,
      "classification": data.classification,
      "date": data.date
    });
  };

  deleteEntry( id ){
    return this.http.delete(this.baseURL + "/data/" + id)
  }

  editEntry = (data: CovidData) => {
    return this.http.put(this.baseURL + "/data/" + data.id, {
      "id": data.id,
      "country": data.country,
      "population": data.population,
      "cases": data.cases,
      "deaths": data.deaths,
      "recoveries": data.recoveries,
      "recoveryRate": data.recoveryRate,
      "fatalityRate": data.fatalityRate,
      "continent": data.continent,
      "classification": data.classification,
      "date": data.date
    });
  };


  //salvataggio dati sul DB
  saveCountryData = (countryCode: string, countryData: any) => {

    console.log('-->', countryCode);
    console.log('----->', countryData);

    const body = JSON.stringify(countryData);

    return this.http.post<any>(this.baseURL + "/timelineCountry/" + countryCode, body);
  };
}
