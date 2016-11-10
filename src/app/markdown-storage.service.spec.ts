/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarkdownStorageService } from './markdown-storage.service';

describe('Service: MarkdownStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkdownStorageService]
    });
  });

  it('should ...', inject([MarkdownStorageService], (service: MarkdownStorageService) => {
    expect(service).toBeTruthy();
  }));
});
