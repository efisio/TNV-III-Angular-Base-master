import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed : boolean = false;
  logged: boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  //controlla ad ogni caricamento se ho il cookie di login nel browser
  ngDoCheck() {
    if (localStorage.getItem('currentUser') != null && localStorage.getItem('currentUser') == 'Admin') {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('admin');
  }

}
