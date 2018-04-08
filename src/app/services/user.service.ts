import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NewUser } from '../new-user-form/NewUser.model';
import { LoginUser } from '../login-form/LoginUser.model';
 
@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  private token: string = "";
  private tokenExpiration: Date;


  public get loginRequired(): boolean {
    return this.token.length == 0 || this.tokenExpiration > new Date();
  }
 
  registerUser(user : NewUser){
    
    const body: NewUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      Email: user.Email,
      UserName: user.UserName,
      Password: user.Password
    }
    return this.http.post(this.rootUrl + '/api/Accounts/Register', body)
  }

  login(creds): Observable<boolean> {

    const body: LoginUser = {
      UserName: creds.UserName,
      Password: creds.Password
    }
    return this.http.post(this.rootUrl + '/api/Accounts/Login', body)
    .map((data: any) => {
      this.token = data.token;
      this.tokenExpiration = data.expiration;
      return true;
    });
  }


}