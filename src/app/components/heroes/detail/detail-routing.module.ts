// Core Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { DetailComponent } from './detail.component';

// Routes List.
const routes: Routes = [
  { path: 'heroes/detail', component: DetailComponent }, // Path for navigate to heroes create view.
  {
    path: 'heroes/detail/:id', component: DetailComponent, // Path for navigate to heroes edit view.
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {}
