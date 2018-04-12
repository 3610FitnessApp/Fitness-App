import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostExerciseComponent } from './post-exercise.component';

describe('ExerciseComponent', () => {
  let component: PostExerciseComponent;
  let fixture: ComponentFixture<PostExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
