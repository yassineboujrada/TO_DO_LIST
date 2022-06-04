import { TestBed } from '@angular/core/testing';

import { TaskItemsService } from './task-items.service';

describe('TaskItemsService', () => {
  let service: TaskItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
