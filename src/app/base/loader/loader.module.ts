// Core Imports
import { NgModule } from '@angular/core';

// Http Imports
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Loader component Imports
import { LoaderComponent } from './loader.component';

// Loader service Imports
import { LoaderService } from './service/loader.service';

// Loader interceptor Imports
import { LoaderInterceptor } from './interceptor/loader-interceptor.service';

const LOADER_COMPONETS = [
  LoaderComponent
];
@NgModule({
  declarations: [LoaderComponent],
  imports: [
  ],
  exports: [
    LoaderComponent,
  ],
  providers: [LoaderService,
    {provide : HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi : true}
  ]
})
export class LoaderModule { }
