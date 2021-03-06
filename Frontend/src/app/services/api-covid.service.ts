import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiCountry } from '../models/apicountry.model';
import { ApiDaily } from '../models/apiDaily.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCovidService {
  
  private baseUrl = 'https://corona-api.com/';
  
  constructor(private http: HttpClient) {

  }

  getCountriesData() {
    return this.http.get<ApiCountry>(this.baseUrl + '/countries');
  }

  getDailyData() {
    return this.http.get<ApiDaily>(this.baseUrl + '/timeline');
  }

  getAfghanistanData() {
    return this.http.get<ApiCountry>(this.baseUrl + '/countries' + '/AF');
  }

}