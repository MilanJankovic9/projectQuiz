import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  constructor(private appService: AppServiceService, private router: Router) { }


  ngOnInit() {
  }

setPoints(points){
  this.appService.setPoints(points)
  this.router.navigate(['test/question3'])
}

}
