import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/AuthService';
import {RoleName} from '../../model/RoleName';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
email: string;
manager = false;
role: string;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.email = localStorage.getItem('email');
    console.log(this.email);

    this.authService.getUserName(this.email).subscribe(data => {
      this.email = data.email;
    });

    this.authService.getUserRole(this.email).subscribe(data1 => {
      console.log(data1);
      console.log(data1.valueOf());
      console.log(data1.toString());
      console.log(data1.valueOf().toString());
      console.log(RoleName.USER.toString());
      // tslint:disable-next-line:triple-equals
      console.log(data1.toString() == RoleName.USER.toString());
      // tslint:disable-next-line:triple-equals
      if (data1.toString() == RoleName.USER.toString()) {
        localStorage.setItem('role', '');
        this.manager = false;
        localStorage.setItem('role', 'USER');
        this.manager = true;
      }
      console.log(data1);
      console.log(RoleName.MANAGER.toString());
      // @ts-ignore
      console.log(localStorage.setItem('role'));
    });

  }
logout() {

    location.replace('registration');

  }


  // accountMethod(){
  //   this.location.replaceState('/');
  //   this.router.navigate(["/account"]);
  // }



}
