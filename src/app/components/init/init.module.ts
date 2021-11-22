// Core Imports.
import { NgModule } from '@angular/core';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';

import { InitRoutingModule } from './init-routing.module';
import { RouterModule } from '@angular/router';

// Router Imports.
import { InitComponent } from './init.component';
import { PostModule } from '../posts/post.module';


const LIST_COMPONENTS = [InitComponent]; // Set the array of componets


@NgModule({
  declarations: [...LIST_COMPONENTS],
  imports: [InitRoutingModule, BaseModule, RouterModule, PostModule],
  providers: [],
  bootstrap: []
})
export class InitModule { }
