// Core Imports.
import { NgModule } from '@angular/core';

// Component Imports.
import { SidebarComponent } from './sidebar.component';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

const SIDEBAR_COMPONENTS = [SidebarComponent]; // Set the array of componets

@NgModule({
  declarations: [...SIDEBAR_COMPONENTS],
  imports: [BaseModule],
  providers: [],
  bootstrap: [],
  exports: [...SIDEBAR_COMPONENTS]
})
export class SidebarModule { }
