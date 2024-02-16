import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {PeopleEditorModalComponent} from './people-editor-modal.component';
import {People} from '../../../models/people';


@Injectable({providedIn: 'root'})
export class PeopleEditorModalService {
  private isOpen = false;
  private instance?: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  show(
    people?: People
  ): void {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    this.instance = this.modalService.open(PeopleEditorModalComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    this.instance.componentInstance.people = people;
    this.instance.componentInstance.confirm = confirm;


    this.instance.result.finally(() => (this.isOpen = false));
  }

  confirm(): void {
    if (!this.isOpen || !this.instance) {
      return;
    }
    this.instance.close();
  }

  dismiss(): void {
    if (!this.isOpen || !this.instance) {
      return;
    }
    this.instance.dismiss();
  }
}
