// Core Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Specific Components Imports
import { ComponentsComponent } from './components.component';

// Modules Imports
import { CommonsModule } from './commons/commons.module';
import { HeroesModule } from './heroes/heroes.module';
import { MarketModule } from './market/market.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PostModule } from './posts/post.module';
import { InitModule } from './init/init.module';

// Router Imports.
import { ComponentsRoutingModule } from './components-routing.module';

const COMPONENT_MODULES = [CommonsModule, HeroesModule, MarketModule, InitModule, PortfolioModule, PostModule];

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    ComponentsRoutingModule,
    ...COMPONENT_MODULES
  ],
  providers: [],
  bootstrap: [],
  exports: [...COMPONENT_MODULES],
})
export class ComponentsModule { }
