// Core Imports.
import { NgModule } from '@angular/core';

// Component Imports.
import { DetailComponent } from './detail.component';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

// Router Imports.
import { DetailRoutingModule } from './detail-routing.module';

// Uppercase Imports.
import { UppercaseDirective } from './directive/uppercase-directive'

const DETAIL_COMPONENTS = [DetailComponent]; // Set the array of componets

@NgModule({
  declarations: [...DETAIL_COMPONENTS, UppercaseDirective],
  imports: [DetailRoutingModule, BaseModule],
  providers: [],
  bootstrap: []
})
export class DetailModule { }
