import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../service/AuthService';
import {Location} from '@angular/common';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  @Input()deleteForm;
submitted: boolean;
sucessmessage: string;
error:false;


  constructor(private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }

deleteUser(id: bigint){
    this.authService.delete(id).subscribe(data => {
      if (data != null){
        this.submitted = true;
        this.sucessmessage = 'successfully';
      }else if (data == null){
        this.submitted = false;
      }
    });
}


  logout(){

    location.replace('/');
  }
}
