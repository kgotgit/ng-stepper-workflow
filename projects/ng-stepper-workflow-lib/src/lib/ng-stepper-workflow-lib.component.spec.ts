import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStepperWorkflowLibComponent } from './ng-stepper-workflow-lib.component';

describe('NgStepperWorkflowLibComponent', () => {
  let component: NgStepperWorkflowLibComponent;
  let fixture: ComponentFixture<NgStepperWorkflowLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStepperWorkflowLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStepperWorkflowLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
