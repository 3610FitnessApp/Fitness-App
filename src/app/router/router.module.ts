import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { NotesComponent } from '../notes/notes.component';
import { NewUserFormComponent } from '../new-user-form/new-user-form.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'log', component: NotesComponent},
  { path: 'register', component: NewUserFormComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
