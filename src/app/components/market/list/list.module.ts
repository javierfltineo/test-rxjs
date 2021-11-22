// Core Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Router Imports.
import { ListComponent } from './list.component';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

// Router Imports.
import { ListRoutingModule } from './list-routing.module';

const LIST_COMPONENTS = [ListComponent]; // Set the array of componets

@NgModule({
  declarations: [...LIST_COMPONENTS],
  imports: [ListRoutingModule, BaseModule,BrowserModule,HttpClientModule,],
  providers: [],
  bootstrap: []
})
export class ListModule { }
