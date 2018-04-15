import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { WorkoutComponent } from './workout/workout.component';
import { PostExerciseComponent } from './post-exercise/post-exercise.component';
import { UserService } from './services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { MyWorkoutsComponent} from './my-workouts/my-workouts.component';
import { ExerciseService } from './services/exercise.service';
import { ContactComponent } from './contact/contact.component';



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
    WorkoutComponent,
    PostExerciseComponent,
    CalendarComponent,
    MyWorkoutsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService, ExerciseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
