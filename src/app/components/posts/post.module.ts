// Core Imports.
import { NgModule } from '@angular/core';

//Base Module Import.
import { BaseModule } from 'src/app/base/base.module';
import {MatBadgeModule} from '@angular/material/badge';
import { PostRoutingModule } from './post-routing.module';

import { RouterModule } from '@angular/router';

// Router Imports.
import { PostComponent } from './post.component';


@NgModule({
  declarations: [...[PostComponent]],
  imports: [BaseModule, RouterModule, PostRoutingModule, MatBadgeModule],
  providers: [],
  bootstrap: [],
  exports: [...[PostComponent]]
})
export class PostModule { }
