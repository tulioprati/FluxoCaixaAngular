import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpendingEditorModalService} from './spending-editor-modal.service';
import {Spending} from '../../../models/spending';
import {SpendingsService} from '../../../services/spending.service';
import {Moment} from 'moment';
import * as moment from 'moment';
import {ConvertDate} from '../../../services/util/convertDate';


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
    private installmentEditorModalService: SpendingEditorModalService,
    private convertDate: ConvertDate
  ) {
    this.spending = new Spending();
  }

  ngOnInit(): void {
    if (!this.spending) {
      this.spending = new Spending();
    }
  }

  onSubmit() {
    if (this.id) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    this.spending.date = this.convertDate.convertDate(this.spending.date);
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

  update(): void {
    this.spending.date = this.convertDate.convertDate(this.spending.date);
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
  }

  cancel(): void {
    this.installmentEditorModalService.dismiss();
  }
}
