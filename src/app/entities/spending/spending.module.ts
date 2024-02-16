import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendingRoutingModule } from './spending-routing.module';
import { FormsModule } from '@angular/forms';
import { SpendingListComponent } from './spending-lista/spending-list.component';
import { SpendingEditorModalComponent } from './spending-form/spending-editor-modal.component';
import {NgxMaskModule} from 'ngx-mask';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [SpendingListComponent, SpendingEditorModalComponent],
  imports: [
    CommonModule,
    SpendingRoutingModule,
    FormsModule,
    NgxMaskModule.forChild(),
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ],exports: [
    SpendingListComponent
  ]
})
export class SpendingModule { }
