import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { NewUser } from '../new-user-form/NewUser.model';
 
@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }
 
  registerUser(user : NewUser){
    
    const body: NewUser = {
      UserName: user.UserName,
      Email: user.Email,
      firstName: user.firstName,
      lastName: user.lastName,
      Password: user.Password,
    }
    return this.http.post(this.rootUrl + '/api/Accounts/Register', body);
  }
 
}