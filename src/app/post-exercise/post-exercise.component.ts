import { Component, OnInit } from '@angular/core';
import { PostExercise } from './PostExercise.model';
import { ExerciseService } from '../services/exercise.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ExerciseInput } from './ExerciseInput.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './post-exercise.component.html',
  styleUrls: ['./post-exercise.component.css']
})
export class PostExerciseComponent implements OnInit {

postExercise: PostExercise;
public exercises: ExerciseInput[];

constructor(private exerciseService: ExerciseService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.postExercise = {
        exercise: "",
        weight: "",
        reps: "",
        sets: "",
        userName: localStorage.getItem("username"),
        ExerciseDate: ""
      }
  }

  getExercises() {
    this.exerciseService.getExerciseModels()
    .subscribe(exercises => this.exercises = exercises);
  }

  OnSubmit(form: NgForm) {
    this.exerciseService.postExercise(form.value)
    .subscribe(success => {
      if (success) {
        alert ("Exercise recorded.")
        this.router.navigate(['/postexercise']);
      }
     }, (err : HttpErrorResponse)=>{
      alert("Failed to register.")
    });
    }

}