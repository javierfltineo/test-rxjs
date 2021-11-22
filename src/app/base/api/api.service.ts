// Core imports.
import { Injectable } from '@angular/core';

// Service imports.
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends AuthApiService {

  constructor() {
    super();
    this.options = {};
  }
}
