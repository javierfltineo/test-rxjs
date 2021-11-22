// Core imports
import { Component } from '@angular/core';

// Service imports
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  providers: []
})
export class LoaderComponent  {

  // Var to check if is loading.
  loading: boolean; 

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });

  }
}
