// Core Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { InitComponent } from './init.component';

// Routes List.
const routes: Routes = [
  { path: 'init', component: InitComponent }, // Path for navigate to heroes create view.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitRoutingModule {}
