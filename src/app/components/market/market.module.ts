// Core Imports.
import { NgModule } from '@angular/core';

// Modules Imports.
import { ListModule } from './list/list.module';
import { BuySellModule } from './buysell/buysell.module';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

@NgModule({
  declarations: [],
  imports: [ BaseModule,...[ListModule]],
  providers: [],
  bootstrap: []
})
export class MarketModule { }
