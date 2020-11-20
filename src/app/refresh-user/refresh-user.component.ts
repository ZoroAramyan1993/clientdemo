import {Component, Input, OnInit} from '@angular/core';

import {AuthService} from '../service/AuthService';
import {UserUpdate} from '../../model/UserUpdate';
import {Location} from '@angular/common';


@Component({
  selector: 'app-refresh-user',
  templateUrl: './refresh-user.component.html',
  styleUrls: ['./refresh-user.component.css']
})
export class RefreshUserComponent implements OnInit {
  @Input()refreshForm;
  manager = false;
  a: string;
  t = false;
  error: boolean;
  constructor(private location: Location, private authService: AuthService) { }

  ngOnInit(): void {

  }

  update(refreshForm: UserUpdate){
    this.authService.update(refreshForm).subscribe(data => {
     if (data != null){
       this.error = false;
       this.t = true;
     }else if (data == null){
       this.error = true;
       this.t = false;
     }
    });
  }
  logout(){
    location.replace('/');

  }
}
