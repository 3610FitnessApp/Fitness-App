import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { PostExercise } from '../post-exercise/PostExercise.model';
import { ExerciseInput } from '../post-exercise/ExerciseInput.model';
 
@Injectable()
export class ExerciseService {
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

   token: string = localStorage.getItem("token");

  postExercise(exercise : PostExercise): Observable<boolean> {
    
    const body: PostExercise = {
      exercise: exercise.exercise,
      weight: exercise.weight,
      reps: exercise.reps,
      sets: exercise.sets,
      userName: localStorage.getItem("username"),
      ExerciseDate: exercise.ExerciseDate
    }

    let header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.token);


    return this.http.post(this.rootUrl + '/api/ExerciseInstances', body, {headers: header})
    .map((data: any) => {
      return true;
    });
  }

  getExerciseModels(): Observable<ExerciseInput[]> {
    return this.http.get<{exercises: ExerciseInput[]}>(this.rootUrl + '/api/Exercises')
    .map(res => res)
    .map(res => <ExerciseInput[]>res.exercises);


  }




}