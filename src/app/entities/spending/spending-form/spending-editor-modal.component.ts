import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpendingEditorModalService} from './spending-editor-modal.service';
import {Spending} from '../../../models/spending';
import {SpendingsService} from '../../../services/spending.service';



@Component({
  selector: 'app-installment-editor-modal',
  templateUrl: './spending-editor-modal.component.html',
  styleUrls: ['./spending-editor-modal.component.css']
})
export class SpendingEditorModalComponent implements OnInit {
  success: boolean = false;
  errors: string[];
  id: number;

  @Input()
  spending: Spending;

  constructor(
    private service: SpendingsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private installmentEditorModalService: SpendingEditorModalService
  ) {
    this.spending = new Spending();
  }

  ngOnInit(): void {
    if(!this.spending) {
      this.spending = new Spending();
    }
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.spending)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          setTimeout(() => {
            this.installmentEditorModalService.confirm();
          }, 1300);
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o spending'];
        });
    } else {
      this.service.salvar(this.spending)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.spending = response;
          setTimeout(() => {
            this.installmentEditorModalService.confirm();
          }, 1300);
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }

  }

  cancel(): void{
    this.installmentEditorModalService.dismiss();
  }
}
