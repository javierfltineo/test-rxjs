// Core Imports.
import { NgModule } from '@angular/core';

// Component Imports.
import { FooterComponent } from './footer.component';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

const FOOTER_COMPONENTS = [FooterComponent]; // Set the array of componets

@NgModule({
  declarations: [...FOOTER_COMPONENTS],
  imports: [BaseModule],
  providers: [],
  bootstrap: [],
  exports: [...FOOTER_COMPONENTS]
})
export class FooterModule { }
