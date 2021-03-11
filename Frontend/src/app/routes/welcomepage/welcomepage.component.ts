import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {

    // console.log(this.loginService.getUsers())
    // var isLogged = this.loginService.checkIsLogged();
    // // var isAdmin = this.loginService.checkIsAdmin();

    // console.log('loggato? ', isLogged)
    // // console.log('admin? ', isAdmin)
  }

  goToDashboard(){
    this.router.navigateByUrl('dashboard');
  }

}
