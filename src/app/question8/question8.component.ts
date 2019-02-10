import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.component.html',
  styleUrls: ['./question8.component.css']
})
export class Question8Component implements OnInit {

  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {

  }

  setPoints(points){
    this.appService.setPoints(points)
    this.router.navigate(['test/question9'])
  }
}
