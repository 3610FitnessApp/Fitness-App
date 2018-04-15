import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { NewUserFormComponent } from '../new-user-form/new-user-form.component';
import { AuthGuard } from '../auth.guard';
import { CalendarComponent } from '../calendar/calendar.component';
import { MyWorkoutsComponent } from '../my-workouts/my-workouts.component';
import { PostExerciseComponent } from '../post-exercise/post-exercise.component';
import { ContactComponent } from '../contact/contact.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
  { path: 'workouts', component: MyWorkoutsComponent, canActivate: [AuthGuard]},
  { path: 'postexercise', component: PostExerciseComponent, canActivate: [AuthGuard]},
  { path: 'register', component: NewUserFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
