import { User } from '../../models/user.model';
import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userName: string;
  pwd: string;
  newUser: User;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    // console.log(this.loginService.getUsers())
    // var isLogged = this.loginService.checkIsLogged();
    // // var isAdmin = this.loginService.checkIsAdmin();

    // console.log('loggato? ', isLogged)
    // // console.log('admin? ', isAdmin)
  }

  addUsers(registerForm: NgForm) {

    let username = registerForm.form.value.userName;
    let password = registerForm.form.value.pwd;

    this.newUser = { userName: username, pwd: password, isAdmin: false}

    //aggiunta user
    this.loginService.addUser(this.newUser);

    console.log(this.newUser,this.loginService.getUsers());

    this.router.navigate(['/login']);
  }
}

