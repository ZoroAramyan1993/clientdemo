import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { RefreshUserComponent } from './refresh-user/refresh-user.component';




const routes: Routes = [
  {path : '', redirectTo : '/registration', pathMatch : 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'refresh-user', component: RefreshUserComponent}
  ];

// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
   CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})



export class AppRoutingModule {

}
