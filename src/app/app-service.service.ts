import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  points = 0;
  _firstName: string;
  _lastName: string;
  constructor() { }

  setPoints(points: number) {
    this.points += points;
  }
  login(firstName: string, lastName:string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  logout() {
    this._firstName = '';
    this._lastName = '';
  }

  resetPoints() {
    this.points = 0;
  }

}
