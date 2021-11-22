// Core Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Router Imports.
import { PortfolioComponent } from './portfolio.component';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

// Router Imports.
import { ListRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [...[PortfolioComponent]],
  imports: [ListRoutingModule, BaseModule,BrowserModule,HttpClientModule,],
  providers: [],
  bootstrap: []
})
export class PortfolioModule { }
