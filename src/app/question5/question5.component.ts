import { Component, OnInit, HostListener } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {
    if(!this.appService._firstName || !this.appService._lastName){
      this.router.navigate(['login'])
    }
  }

  setPoints(points) {
    this.appService.setPoints(points)
    this.router.navigate(['test/question6'])
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
