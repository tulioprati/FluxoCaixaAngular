import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {SpendingEditorModalComponent} from './spending-editor-modal.component';
import {Spending} from '../../../models/spending';


@Injectable({providedIn: 'root'})
export class SpendingEditorModalService {
  private isOpen = false;
  private instance?: NgbModalRef;

  constructor(private modalService: NgbModal) {
  }

  show(
    spending?: Spending
  ): void {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    this.instance = this.modalService.open(SpendingEditorModalComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    this.instance.componentInstance.spending = spending;
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
