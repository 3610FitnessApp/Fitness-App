import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
 
@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }
 
  registerUser(user : User){
    
    const body: User = {
      UserName: user.UserName,
      password: user.password,
      Email: user.Email,
      firstName: user.firstName,
      lastName: user.lastName
    }

    let header = new Headers();
    header.append("Content-Type", "application/json");

    return this.http.post(this.rootUrl + '/api/Accounts/Register', body);
  }
 
}