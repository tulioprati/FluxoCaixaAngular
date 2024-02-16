import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEditorModalComponent } from './people-editor-modal.component';

describe('InstallmentEditorModalComponent', () => {
  let component: PeopleEditorModalComponent;
  let fixture: ComponentFixture<PeopleEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
