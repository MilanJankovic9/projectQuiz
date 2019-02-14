import { Component, OnInit, HostListener } from '@angular/core';
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
  constructor(private appService: AppServiceService, private router: Router) { history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
   }

  ngOnInit() {
    this.finishPoints = this.appService.points;
  }

  reset(){
    this.appService.resetPoints();
    this.router.navigate(['home'])
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
