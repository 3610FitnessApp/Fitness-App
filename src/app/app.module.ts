import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouterModule } from './router/router.module';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NotesComponent } from './notes/notes.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    AboutComponent,
    HeaderComponent,
    LoginFormComponent,
    NewUserFormComponent,
    NotesComponent,
    WorkoutComponent,
    ExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
