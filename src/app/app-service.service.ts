import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  points = 0;

  constructor() { }

  setPoints(points: number) {
    this.points += points;
  }

  resetPoints() {
    this.points = 0;
  }

}
