// Core Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing Import
import { AppRoutingModule } from './app-routing.module';

// Components Imports
import { AppComponent } from './app.component';

// Modules Imports
import { ComponentsModule } from './components/components.module';

// BaseModule Import
import { BaseModule } from './base/base.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
