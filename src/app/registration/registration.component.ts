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
  error = false;
  public successMessage: string;
  submitted = false;
  @Input() registrationForm;
  email: string;




  constructor(private authService: AuthService, private router: Router, private userService: UserService, private location: Location) { }

  onSubmit(registrationForm: User){
     this.user = {id: null,
       name: registrationForm.name, surname: registrationForm.surname, email: registrationForm.email,
       password: registrationForm.password
     };
     this.authService.signUpUser(this.user).subscribe(data => {
          if (data != null){
            this.submitted = true;
            this.successMessage = 'You are registred successfully';
          }else {
            this.error = true;
          }
     });
  }



  ngOnInit(): void {

  }

}
