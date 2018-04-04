import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  public creds = {
    UserName: "",
    password: ""
  }

  ngOnInit() {
  }

  onLogin() {
   this.creds.UserName += "!";
  }

}
