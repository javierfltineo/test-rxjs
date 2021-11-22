// Core Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Imports
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// Component Imports
import { HeroesConfirmDialogComponent } from './heroes-confirm-dialog.component';

const HEROES_CONFIRM_DIALOG_COMPONENTS = [
  HeroesConfirmDialogComponent,
];

@NgModule({
  declarations: [
    ...HEROES_CONFIRM_DIALOG_COMPONENTS,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ...HEROES_CONFIRM_DIALOG_COMPONENTS
  ]
})
export class HeroesConfirmDialogModule { }
