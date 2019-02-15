import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Interprefy';
  lastName;
  firstName;

  constructor(private appService: AppServiceService, private router: Router) {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }

  ngOnInit() {
    if(!this.appService._firstName || !this.appService._lastName){
      this.router.navigate(['login'])
    }
    this.firstName = this.appService._firstName;
    this.lastName = this.appService._lastName;
  }

  scroll(el: HTMLElement){
    el.scrollIntoView();

  }

  logout() {
    this.appService.logout();
    this.router.navigate(['login']);
  }

}
