import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DocumentNameComponent } from '../documents/document-name.component';
@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild([
])],

  declarations: [
    DocumentNameComponent
  ]
})
export class DocumentModule { }
