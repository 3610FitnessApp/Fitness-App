import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  
  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
  }
  login()
  {
    this.appComponent.loggedIn = !(this.appComponent.loggedIn);
  }

}
