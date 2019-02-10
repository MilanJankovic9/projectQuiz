import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-testResults',
  templateUrl: './testResults.component.html',
  styleUrls: ['./testResults.component.css']
})
export class TestResultsComponent implements OnInit {
  title = "Work in progress.."
  finishPoints;
  constructor(private appService: AppServiceService, private router: Router) { }

  ngOnInit() {
    this.finishPoints = this.appService.points;
  }

  reset(){
    this.appService.resetPoints();
    this.router.navigate(['home'])
  }

}
