import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingEditorModalComponent } from './spending-editor-modal.component';

describe('InstallmentEditorModalComponent', () => {
  let component: SpendingEditorModalComponent;
  let fixture: ComponentFixture<SpendingEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
