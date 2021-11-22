// Core Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @angular/forms Imports
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const FORM_MODULES = [
  ReactiveFormsModule,
  FormsModule,
];
@NgModule({
  declarations: [],
  imports: [
    ...FORM_MODULES,
    CommonModule,
  ], exports: [
    ...FORM_MODULES,
  ]
})
export class FormModule { }
