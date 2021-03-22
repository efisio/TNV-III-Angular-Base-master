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
  userName: string;
  pwd: string;
  users: User[];
  
  loginError: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {


    this.redirect();

  }

  onSubmit(loginForm: NgForm) {

    this.loginError = false;

    let username = loginForm.form.value.userName;
    let password = loginForm.form.value.pwd;

    //chiamata all'endpoint di login
    this.loginService.login(username, password)
      .subscribe(
        res => {
          this.loginError = false;
          localStorage.setItem('currentUser', res.username);
          this.redirect();
        },
        err => {
          console.log(err)
          this.loginError = true;
        },
        () => console.log("Login Complete.")
    );
  }

  redirect() {
    if (localStorage.getItem('currentUser') != null && localStorage.getItem('currentUser') == 'Admin'){
        this.router.navigateByUrl('/adminDashboard');
    }
  }
}

