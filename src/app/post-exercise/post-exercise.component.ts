import { Component, OnInit} from '@angular/core';
import { PostExercise } from './PostExercise.model';
import { ExerciseService } from '../services/exercise.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ExerciseInput } from './ExerciseInput.model';
import { ExerciseInstance } from '../post-exercise/ExerciseInstance.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './post-exercise.component.html',
  styleUrls: ['./post-exercise.component.css']
})
export class PostExerciseComponent implements OnInit {

postExercise: PostExercise;
public exercises: ExerciseInput[] = [];
public exerciseInstances: ExerciseInstance[] = [];

constructor(private exerciseService: ExerciseService, private router: Router) { }
  
  add_exercise:boolean = false;
  edit_exercise:boolean = false;

  ngOnInit(): void {
    this.resetForm();
    this.getExerciseModels();
    this.getExerciseInstances();
  }

  getExerciseModels() {
    this.exerciseService.getExerciseModels()
      .subscribe(success => {
        if (success) {
          this.exercises = this.exerciseService.exercises;
        }
      })
  }

  getExerciseInstances() {
    this.exerciseService.getExerciseInstances()
    .subscribe(success => {
      if (success) {
        this.exerciseInstances = this.exerciseService.exerciseInstances
      }
    })
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
        ExerciseDate: "",
        ExerciseInstanceId: 0
      }
  }

  onSelect(exerciseInstance: ExerciseInstance, exerciseName: string, exerciseDate: string, exerciseId: number){
    this.postExercise = {
      exercise: exerciseName,
      weight: exerciseInstance.weight,
      reps: exerciseInstance.reps,
      sets: exerciseInstance.sets,
      userName: localStorage.getItem("username"),
      ExerciseDate: exerciseDate,
      ExerciseInstanceId: exerciseId
    }
  }

  OnSubmit(form: NgForm) {
    if(this.add_exercise){
      this.PostExercise(form);
    }else if(this.edit_exercise){
      this.EditExercise(form);
    }
    this.resetForm(form);
    this.getExerciseInstances()
    this.add_exercise = false;
    this.edit_exercise = false;
  }

  PostExercise(form: NgForm){
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

    EditExercise(form: NgForm) {
      this.exerciseService.editExercise(form.value)
      .subscribe(success => {
        if (success) {
          alert ("Exercise updated.")
          this.router.navigate(['/postexercise']);
        }
       }, (err : HttpErrorResponse)=>{
        alert("Failed to update exercise.")
      });
      }
}