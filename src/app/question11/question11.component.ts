import { Component, OnInit, HostListener } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question11',
  templateUrl: './question11.component.html',
  styleUrls: ['./question11.component.css']
})
export class Question11Component implements OnInit {

  value = 0;
  clickedCounter = 0;


  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {
  }

  onKey(event: any) {
    if (event.keyCode === 17 || event.keyCode === 32) {
      this.clickedCounter += 1;
      this.value += event.keyCode;
      if (this.clickedCounter === 2) {
        if (this.value === 49) {
          this.appService.setPoints(8);
        }

        this.router.navigate(['testResults']);
      }
    } else {

      this.router.navigate(['testResults']);
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.onKey(event);
  }
}
