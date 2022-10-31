import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeleteUpdateComponent } from './student-delete.component';

describe('StudentDeleteUpdateComponent', () => {
  let component: StudentDeleteUpdateComponent;
  let fixture: ComponentFixture<StudentDeleteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDeleteUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDeleteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
