import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AuthService} from '../service/AuthService';
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {UserService} from '../service/UserService';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user: User;
error: false;
public successMessage: string;
   submited = false;
   @Input()loginForm;

  private switchers: NodeListOf<Element>[];


  constructor(private authService: AuthService, private router: Router, private userService: UserService, private location: Location) { }



  ngOnInit(): void {

  }

}
