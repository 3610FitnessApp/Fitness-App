import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NewUser } from '../new-user-form/NewUser.model';
import { LoginUser } from '../login-form/LoginUser.model';
import { Router } from '@angular/router';
 
@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  private token: string = "";
  private tokenExpiration: Date;
  private loggedIn = false;


  public get loginRequired(): boolean {
    return this.token.length == 0 || this.tokenExpiration > new Date();
  }
 
  registerUser(user : NewUser): Observable<boolean> {
    
    const body: NewUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      Email: user.Email,
      UserName: user.UserName,
      Password: user.Password
    }
    return this.http.post(this.rootUrl + '/api/Accounts/Register', body)
    .map((data: any) => {
      this.token = data.token;
      this.tokenExpiration = data.expiration;
      return true;
    });
  }

  login(creds): Observable<boolean> {

    const body: LoginUser = {
      UserName: creds.UserName,
      Password: creds.Password
    }
    return this.http.post(this.rootUrl + '/api/Accounts/Login', body)
    .map((data: any) => {
      this.token = data.token;
      localStorage.setItem('token', data.token);
      
      this.tokenExpiration = data.expiration;
      localStorage.setItem('tokenExpiration', data.expiration);
      
      this.loggedIn = true;
      
      return true;
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('tokenExpiration');
    this.loggedIn = false;
    //this._authNavStatusSource.next(false);
    alert("Goodbye")
  }

  isLoggedIn() {
    return this.loggedIn;
  }


}