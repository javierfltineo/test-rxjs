// Core Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Base Imports
import { FlexLayoutModule } from './flex-layout/flex-layout.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormModule } from './form/form.module';
import { ApiModule } from './api/api.module';
import { HeroesConfirmDialogModule } from './heroes-confirm-dialog/heroes-confirm-dialog.module';
import { LoaderModule } from './loader/loader.module';

const BASE_MODULES = [
  ApiModule,
  FormModule,
  MaterialModule,
  FlexLayoutModule,
  BrowserAnimationsModule,
  HeroesConfirmDialogModule,
  LoaderModule
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...BASE_MODULES
  ],
  exports: [
    ...BASE_MODULES
  ],
  providers: [],
  bootstrap: []
})
export class BaseModule { }
