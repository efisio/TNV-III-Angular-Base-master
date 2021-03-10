import { User } from '../models/user.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  admin:User={userName:"admin", pwd:"admin", isAdmin: true};

  isLogged=false;
  isAdmin=false;
  users:User[] =[this.admin];
  currentUser:User;

  constructor( ) { }
  
  addUser(user: User){
    this.users.push(user);
  }

  checkIsLogged(){
    return this.isLogged;
  }

  checkIsAdmin() {
    return this.currentUser.isAdmin;
  }

  getCurrentUser(){
    return this.currentUser;
  }

  checkUser( userName:string, pwd:string ){

    for(let i=0;i<this.users.length;i++){
      if(userName === this.users[i].userName && pwd === this.users[i].pwd){
        this.isLogged=true;
        this.currentUser = this.users[i];
        return true;
      }
    }
    return false;
  }
}