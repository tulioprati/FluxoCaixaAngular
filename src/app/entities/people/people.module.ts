import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { FormsModule } from '@angular/forms';
import { PeopleListComponent } from './people-lista/people-list.component';
import { PeopleEditorModalComponent } from './people-form/people-editor-modal.component';
import {NgxMaskModule} from 'ngx-mask';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [PeopleListComponent, PeopleEditorModalComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    NgxMaskModule.forChild(),
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ],exports: [
    PeopleListComponent
  ]
})
export class PeopleModule { }
