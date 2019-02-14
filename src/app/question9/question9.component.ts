import { Component, OnInit, HostListener } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.component.html',
  styleUrls: ['./question9.component.css']
})
export class Question9Component implements OnInit {

  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {

  }

  setPoints(points: number) {
    this.appService.setPoints(points)
    this.router.navigate(['test/question10'])
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
