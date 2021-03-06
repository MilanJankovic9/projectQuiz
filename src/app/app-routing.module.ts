import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestResultsComponent } from './testResults/testResults.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { Question8Component } from './question8/question8.component';
import { Question9Component } from './question9/question9.component';
import { Question10Component } from './question10/question10.component';
import { Question11Component } from './question11/question11.component';
import { LoginComponent } from './login/login.component';
import { Question12Component } from './question12/question12.component';
import { Question13Component } from './question13/question13.component';
import { Question14Component } from './question14/question14.component';
import { Question15Component } from './question15/question15.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '#section-a', redirectTo: '/home/#section-a', pathMatch: 'full' },
  { path: '#section-b', redirectTo: '/home/#section-b', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'testResults', component: TestResultsComponent },
  { path: 'test/question1', component: Question1Component },
  { path: 'test/question2', component: Question2Component },
  { path: 'test/question3', component: Question3Component },
  { path: 'test/question4', component: Question4Component },
  { path: 'test/question5', component: Question5Component },
  { path: 'test/question6', component: Question6Component },
  { path: 'test/question7', component: Question7Component },
  { path: 'test/question8', component: Question8Component },
  { path: 'test/question9', component: Question9Component },
  { path: 'test/question10', component: Question10Component },
  { path: 'test/question11', component: Question11Component },
  { path: 'test/question12', component: Question12Component },
  { path: 'test/question13', component: Question13Component },
  { path: 'test/question14', component: Question14Component },
  { path: 'test/question15', component: Question15Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
