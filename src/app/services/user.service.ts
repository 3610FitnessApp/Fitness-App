import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
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
    .catch(this._errorHandler);
  }

  private _errorHandler(error: Response){
    console.log(error);
    alert ("Error!");
    return Observable.throw(error || "error on server");
  }

}