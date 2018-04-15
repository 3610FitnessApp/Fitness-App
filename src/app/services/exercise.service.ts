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
import { ExerciseInstance } from '../post-exercise/ExerciseInstance.model';
 
@Injectable()
export class ExerciseService {
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

   token: string = localStorage.getItem("token");
   public exercises: ExerciseInput[] = [];
   public exerciseInstances: ExerciseInstance[] = [];

  postExercise(exercise : PostExercise): Observable<boolean> {
    
    const body: PostExercise = {
      exercise: exercise.exercise,
      weight: exercise.weight,
      reps: exercise.reps,
      sets: exercise.sets,
      userName: localStorage.getItem("username"),
      ExerciseDate: exercise.ExerciseDate,
      id: exercise.id
    }

    let header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.token);


    return this.http.post(this.rootUrl + '/api/ExerciseInstances', body, {headers: header})
    .map((data: any) => {
      return true;
    });
  }

  getExerciseInstances() {
    let header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.token);
    return this.http.get(this.rootUrl + '/api/ExerciseInstances/' + localStorage.getItem("username"), {headers: header})
    .map((data: any[]) => {
      this.exerciseInstances = data;
      return true;
    });
  }


  getExerciseModels() {
    return this.http.get(this.rootUrl + '/api/Exercises')
    .map((data: any[]) => {
      this.exercises = data;
      return true;
    });
  }


}