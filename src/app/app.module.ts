import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { TestResultsComponent } from './testResults/testResults.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { MatIconModule } from '@angular/material/icon';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { Question8Component } from './question8/question8.component';
import { Question9Component } from './question9/question9.component';
import { Question10Component } from './question10/question10.component';
import { MatCardModule } from '@angular/material/card';
import { Question11Component } from './question11/question11.component';
import { Question12Component } from './question12/question12.component';
import { Question13Component } from './question13/question13.component';
import { Question14Component } from './question14/question14.component';
import { Question15Component } from './question15/question15.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestResultsComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    Question8Component,
    Question9Component,
    Question10Component,
    Question11Component,
    Question12Component,
    Question13Component,
    Question14Component,
    Question15Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
