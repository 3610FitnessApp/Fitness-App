import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LoginUser } from './LoginUser.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  loginCreds: LoginUser;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.loginCreds = {
      UserName: '',
      Password: ''
      }
  }

  onLogin(form: NgForm) {
    var username = form.value.UserName
   this.userService.login(form.value)
   .subscribe(success => {
    if (success) {
      localStorage.setItem('username', username);
      this.router.navigate(['/']);
    }
   }, (err : HttpErrorResponse)=>{
    alert("Invalid Username or Password.")
  });
  }
}
