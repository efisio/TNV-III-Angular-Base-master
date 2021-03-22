import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // admin:User={userName:"admin", pwd:"admin", isAdmin: true};

  // isLogged=false;
  // isAdmin=false;

  private isLogged = new BehaviorSubject<boolean>(false);
  // private isAdmin = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User>(null);
  private users = new BehaviorSubject<User[]>([
    { userName: "admin", pwd: "admin", isAdmin: true },
    { userName: "user", pwd: "user", isAdmin: false, lang: 'IT' },
  ]);

  // isLogged: boolean;
  // isAdmin: boolean;

  // users:User[] =[this.admin];
  // currentUser:User;

  private baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }
  
  // addUser(user: User){
  //   this.users.getValue().push(user);
  // }

  // getUsers() {
  //   return this.users.getValue();
  // }

  // checkIsLogged(){
  //   return this.isLogged.getValue();
  // }

  // checkIsAdmin() {
  //   if (this.currentUser.getValue()){
  //     return this.currentUser.getValue().isAdmin;
  //   }
  // }

  // getCurrentUser(){
  //   return this.currentUser.getValue();
  // }

  // logout() {
  //   // this.isLogged = true;

  //   this.isLogged.next(false);
  //   this.currentUser.next(null);
  // }

  // checkUser( userName:string, pwd:string ){

  //   for(let i=0;i<this.users.getValue().length;i++){
  //     if (userName === this.users.getValue()[i].userName && pwd === this.users.getValue()[i].pwd){

  //       // this.isLogged=true;
  //       this.isLogged.next(true)

  //       // this.currentUser = this.users[i];

  //       this.currentUser.next(this.users[i]);
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  //sistema con autenticazione Springboot security
  login(username: string, password: string){

    let base64Pass = btoa(username + ':' + password);

    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Basic ${base64Pass}`)
        .set('Content-Type', 'application/json')
    }

    return this.http.get<any>(this.baseURL + '/login' + '/' + username, header);

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}