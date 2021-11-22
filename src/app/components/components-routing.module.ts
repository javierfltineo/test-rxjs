// Core imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { ComponentsComponent } from './components.component';

// Routes List.
const routes: Routes = [
  { path: 'components', component: ComponentsComponent }, // Path for navigate to componets component.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ComponentsRoutingModule { }
