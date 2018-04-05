import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUser } from './LoginUser.model';
import { UserService } from '../services/user.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginUser: LoginUser;
  errorMessage: string = "";

  constructor(private userService: UserService) { }


  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.userService.login(form.value)
    .subscribe(success => {
      if (success) {
        alert("Logged in!")
      }
    }, err => this.errorMessage = "failed to login")
    }
  }
