import { Component, OnInit } from '@angular/core';
import { NewUser } from './NewUser.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Observable} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  newUser: NewUser;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.newUser = {
      UserName: '',
      Password: '',
      Email: '',
      firstName: '',
      lastName: ''
      }
  }

  OnSubmit(form: NgForm) {
    var username = form.value.UserName
    this.userService.registerUser(form.value)
    .subscribe((data: any) => {
      if (data.succeeded == true) {
        alert(username + " registered.");
      }
    }, 
    (err : HttpErrorResponse)=>{
      alert("Failed to register.")
    });
  }

}