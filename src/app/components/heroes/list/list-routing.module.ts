// Core Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { ListComponent } from './list.component';

// Routes List.
const routes: Routes = [
  { path: 'heroes/list', component: ListComponent }, // Path for navigate to heroest list view.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
