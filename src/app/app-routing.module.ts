// Core Router Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes list
const routes: Routes = [
  { path: '', redirectTo: 'init', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
