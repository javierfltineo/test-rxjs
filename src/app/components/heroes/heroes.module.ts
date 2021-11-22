// Core Imports.
import { NgModule } from '@angular/core';

// Modules Imports.
import { ListModule } from './list/list.module';
import { DetailModule } from './detail/detail.module';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

const HEROES_MODULES = [ListModule,DetailModule]; // Set the array of componets

@NgModule({
  declarations: [],
  imports: [ BaseModule,...HEROES_MODULES],
  providers: [],
  bootstrap: []
})
export class HeroesModule { }
