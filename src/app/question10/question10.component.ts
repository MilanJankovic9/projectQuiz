import { Component, OnInit, HostListener } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.css']
})
export class Question10Component implements OnInit {

  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {
    if(!this.appService._firstName || !this.appService._lastName){
      this.router.navigate(['login'])
    }
  }

  setPoints(points) {
    this.appService.setPoints(points)
    this.router.navigate(['test/question11'])
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
