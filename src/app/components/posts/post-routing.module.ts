// Core Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { PostComponent } from './post.component';

// Routes List.
const routes: Routes = [
  { path: 'post', component: PostComponent }, // Path for navigate to heroes create view.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
