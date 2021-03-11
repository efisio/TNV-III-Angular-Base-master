import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { CovidData } from 'src/app/models/data.model';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: User;
  covidDataLoader=false;
  constructor(private dataService: DataService, private loginService: LoginService, private router : Router) { }

  ngOnInit(): void {
    // this.currentUser = this.loginService.getCurrentUser();

    console.log(this.currentUser);
    this.getEntries()
  }

  public covidData: CovidData [];
  countries;

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.covidData = response;
      this.covidDataLoader=true;
    })
    
    
  }

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

  

}
