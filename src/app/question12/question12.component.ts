import { Component, OnInit, HostListener } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question12',
  templateUrl: './question12.component.html',
  styleUrls: ['./question12.component.css']
})
export class Question12Component implements OnInit {

  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {
  }

  setPoints(points) {
    this.appService.setPoints(points)
    this.router.navigate(['test/question13'])
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
