import { Component, OnInit, HostListener } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.css']
})
export class Question7Component implements OnInit {

  clickedCounter = 0;
  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {
  }

  onKey(event: any) {
    if (event.keyCode === 37 || event.keyCode === 39) {
      this.appService.setPoints(8);
    }
    this.router.navigate(['test/question8']);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.onKey(event);
  }
}

