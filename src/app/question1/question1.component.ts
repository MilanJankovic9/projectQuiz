import { Component, OnInit, Input } from '@angular/core';
import { disableBindings } from '@angular/core/src/render3';
import { AppComponent } from '../app.component';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {
  }

  setPoints(points){
    this.appService.setPoints(points)
    this.router.navigate(['test/question2'])
  }

}
