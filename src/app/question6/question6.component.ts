import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.css']
})
export class Question6Component implements OnInit {
  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {

  }

  setPoints(points){
    this.appService.setPoints(points)
    this.router.navigate(['test/question7'])
  }

}
