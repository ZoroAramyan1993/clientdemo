import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';




const routes: Routes = [
  {path : '', redirectTo : '/registration', pathMatch : 'full'},
  {path: 'registration', component: RegistrationComponent}
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
