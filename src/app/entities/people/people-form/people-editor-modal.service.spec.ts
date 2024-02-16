import { TestBed } from '@angular/core/testing';

import { PeopleEditorModalService } from './people-editor-modal.service';

describe('InstallmentEditorModalService', () => {
  let service: PeopleEditorModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleEditorModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
