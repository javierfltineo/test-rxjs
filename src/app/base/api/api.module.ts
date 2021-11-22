// Core Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services Imports
import { ApiService } from './api.service';
import { AuthApiService } from './auth-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    AuthApiService
  ]
})
export class ApiModule { }
