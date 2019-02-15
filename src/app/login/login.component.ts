import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstName = '';
  lastName = '';

  constructor(private router: Router, private appService: AppServiceService) { }

  ngOnInit() {
  }

  login() {
    this.appService.login(this.firstName, this.lastName);
    this.router.navigate(['home']);
  }

}
