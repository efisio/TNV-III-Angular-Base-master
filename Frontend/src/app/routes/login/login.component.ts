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
  // myimage: string = "/assets/3.jpg"
  userName: string;
  pwd: string;
  users: User[];
  
  loginError: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {

    // console.log(this.loginService.getUsers())
    // var isLogged = this.loginService.checkIsLogged();
    // var isAdmin = this.loginService.checkIsAdmin();

    // console.log('loggato? ', isLogged)
    // console.log('admin? ', isAdmin)


    // if (this.loginService.checkIsLogged()) {

    //   //distinzione utenza normale e admin
    //   if (this.loginService.checkIsAdmin()){
    //     console.log('admin? ', this.loginService.checkIsAdmin())
    //     this.router.navigateByUrl('/adminDashboard');
    //   }else{
    //     this.router.navigateByUrl('/userDashboard');
    //   }
    // }
  }

  onSubmit(loginForm: NgForm) {

    this.loginError = false;

    let username = loginForm.form.value.userName;
    let password = loginForm.form.value.pwd;

    // let checkLogin = this.loginService.checkUser(username, password);

    //chiamata all'endpoint di login
    this.loginService.login(username, password)
      .subscribe(res => {
        console.log('LOGIN', res);

        if (res.status == 200) {
          //
        }
      }),
      (err) => {
        console.error('ERRORE',err);
      };


    // if (checkLogin) {

    //   if (this.loginService.checkIsAdmin()){
    //     this.router.navigate(['/adminDashboard']);
    //   }else{
    //     this.router.navigate(['/home']);
    //   }

    // } else {
    //   this.loginError = true;
    //   //console.log("Login non valida!");
    // }
  }
}

