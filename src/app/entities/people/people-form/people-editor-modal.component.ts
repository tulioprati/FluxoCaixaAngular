import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleEditorModalService} from './people-editor-modal.service';
import {People} from '../../../models/people';
import {PeoplesService} from '../../../services/people.service';

@Component({
  selector: 'app-installment-editor-modal',
  templateUrl: './people-editor-modal.component.html',
  styleUrls: ['./people-editor-modal.component.css']
})
export class PeopleEditorModalComponent implements OnInit {
  success: boolean = false;
  errors: string[];
  id: number;

  @Input()
  people: People;

  constructor(
    private service: PeoplesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private installmentEditorModalService: PeopleEditorModalService
  ) {
    this.people = new People();
  }

  ngOnInit(): void {
    if(!this.people) {
      this.people = new People();
    }
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.people)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          setTimeout(() => {
            this.installmentEditorModalService.confirm();
          }, 1300);
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o people'];
        });
    } else {
      this.service.salvar(this.people)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.people = response;
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
