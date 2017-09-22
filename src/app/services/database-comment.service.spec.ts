import { TestBed, inject } from '@angular/core/testing';

import { DatabaseCommentService } from './database-comment.service';

describe('DatabaseCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseCommentService]
    });
  });

  it('should be created', inject([DatabaseCommentService], (service: DatabaseCommentService) => {
    expect(service).toBeTruthy();
  }));
});
