import { TestBed } from '@angular/core/testing';

import { SpendingEditorModalService } from './spending-editor-modal.service';

describe('InstallmentEditorModalService', () => {
  let service: SpendingEditorModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpendingEditorModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
