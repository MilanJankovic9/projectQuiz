import { Component, OnInit } from '@angular/core';
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

  }

  setPoints(points){
    this.appService.setPoints(points)
    this.router.navigate(['test/question11'])
  }
}
