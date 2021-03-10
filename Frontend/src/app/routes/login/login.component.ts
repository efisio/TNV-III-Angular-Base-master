import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  myimage: string = "/assets/3.jpg"
  userName: string;
  pwd: string;
  users: User[];

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    console.log(this.loginService.checkIsLogged());
    if (this.loginService.checkIsLogged()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  login(loginForm: NgForm) {

    let username = loginForm.form.value.userName;
    let password = loginForm.form.value.pwd;

    let checkLogin = this.loginService.checkUser(username, password);
    if (checkLogin) {

      if (this.loginService.checkIsAdmin()){
        this.router.navigate(['/adminDashboard']);
      }else{
        this.router.navigate(['/dashboard']);
      }

    } else {
      console.log("Login non valida!");
    }
  }
}

