import { Component, OnInit, HostListener } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
  firstName;
  lastName;
  constructor(private appService: AppServiceService, private router: Router) {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };

    console.log(this.appService._firstName);


  }

  ngOnInit() {
    if(!this.appService._firstName || !this.appService._lastName){
      this.router.navigate(['login'])
    }
  }

  setPoints(points) {
    this.appService.setPoints(points);
    this.router.navigate(['test/question2']);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.hasUnsavedData()) {
      $event.returnValue = true;
    }
  }
  hasUnsavedData(): any {
    return true;
  }

}
