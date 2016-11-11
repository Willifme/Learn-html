/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToolbarTitleService } from './toolbar-title.service';

describe('Service: ToolbarTitle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarTitleService]
    });
  });

  it('should ...', inject([ToolbarTitleService], (service: ToolbarTitleService) => {
    expect(service).toBeTruthy();
  }));
});
