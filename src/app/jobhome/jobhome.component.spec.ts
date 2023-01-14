import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobhomeComponent } from './jobhome.component';

describe('JobhomeComponent', () => {
  let component: JobhomeComponent;
  let fixture: ComponentFixture<JobhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
