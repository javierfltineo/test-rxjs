// Core Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { PortfolioComponent } from './portfolio.component';

// Routes List.
const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent }, // Path for navigate to heroest list view.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
