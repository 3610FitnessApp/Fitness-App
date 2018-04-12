import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { PostExercise } from '../post-exercise/PostExercise.model';
 
@Injectable()
export class ExerciseService {
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

   token: string = localStorage.getItem("token");

  postExercise(exercise : PostExercise): Observable<boolean> {

    alert(this.token)
    
    const body: PostExercise = {
      exercise: exercise.exercise,
      weight: exercise.weight,
      reps: exercise.reps,
      sets: exercise.sets,
      userName: localStorage.getItem("username"),
      ExerciseDate: exercise.ExerciseDate
    }

    let header = new HttpHeaders();
    //header.set('Content-Type', 'application/json');
    //header.set('Authorization', 'Bearer ' + this.token);


    return this.http.post(this.rootUrl + '/api/ExerciseInstances', body, {headers: header})
    .map((data: any) => {
      return true;
    });
  }




}