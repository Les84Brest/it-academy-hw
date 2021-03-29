import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHoleComponent } from './work-hole.component';

describe('WorkHoleComponent', () => {
  let component: WorkHoleComponent;
  let fixture: ComponentFixture<WorkHoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkHoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
