import { Component, OnInit, HostListener } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question15',
  templateUrl: './question15.component.html',
  styleUrls: ['./question15.component.css']
})
export class Question15Component implements OnInit {

  clickedCounter = 0;
  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {
  }

  onKey(event: any) {
    if (event.keyCode === 38 || event.keyCode === 40) {
      this.appService.setPoints(8);
    }
    this.router.navigate(['testResults']);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.onKey(event);
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
