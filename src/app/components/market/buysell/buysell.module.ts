// Core Imports.
import { NgModule } from '@angular/core';

// Component Imports.
import { BuySellComponent } from './buysell.component';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';



const DETAIL_COMPONENTS = [BuySellComponent]; // Set the array of componets

@NgModule({
  declarations: [...DETAIL_COMPONENTS],
  imports: [BaseModule],
  providers: [],
  bootstrap: []
})
export class BuySellModule { }
