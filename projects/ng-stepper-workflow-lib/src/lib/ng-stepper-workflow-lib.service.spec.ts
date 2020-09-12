import { TestBed } from '@angular/core/testing';

import { NgStepperWorkflowLibService } from './ng-stepper-workflow-lib.service';

describe('NgStepperWorkflowLibService', () => {
  let service: NgStepperWorkflowLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStepperWorkflowLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
