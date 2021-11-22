// Core Imports.
import { NgModule } from '@angular/core';

// Component Imports.
import { HeaderComponent } from './header.component';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

const HEADER_COMPONENTS = [HeaderComponent]; // Set the array of componets

@NgModule({
  declarations: [...HEADER_COMPONENTS],
  imports: [BaseModule],
  providers: [],
  bootstrap: [],
  exports: [...HEADER_COMPONENTS]
})
export class HeaderModule { }
