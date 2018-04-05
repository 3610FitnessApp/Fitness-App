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
      firstName: user.firstName,
      lastName: user.lastName,
      Email: user.Email,
      UserName: user.UserName,
      Password: user.Password
    }
    return this.http.post(this.rootUrl + '/api/Accounts/Register', body)
    .subscribe((data: any) => {
      if (data.succeeded == true) {
        alert(user.UserName + " registered.");
      } else {
        alert("registration failed");
      }
 
    });
  }
}