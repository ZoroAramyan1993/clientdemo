import { BrowserModule } from '@angular/platform-browser';
import {Component, Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing-module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthService} from './service/AuthService';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RefreshUserComponent } from './refresh-user/refresh-user.component';
import {UserService} from './service/UserService';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    RefreshUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})

@Injectable({providedIn: 'root'})
export class AppModule { }
