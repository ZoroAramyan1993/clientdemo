import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {UserService} from '../service/UserService';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public user: User;
  @Input()loginForm;
  id: bigint;
  loginError: boolean;
  requiredLogin: boolean;


  constructor(private authService: AuthService, private router: Router, private userService: UserService,
              private location: Location) { }

  onClick(loginForm: User){
    this.authService.attempthAuth(loginForm).subscribe(data => {
      if (data != null){
        this.user = data;
        this.requiredLogin = true;
        // @ts-ignore
        this.location.replaceState(['/home']);
      }else {
        this.loginError = true;
        this.requiredLogin = false;
      }
    });
    // this.location.replaceState('/')
    // this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
