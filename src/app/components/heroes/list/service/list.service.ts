// core Import.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Enviroment Import.
import { environment } from 'src/environments/environment';

// Types Imports.
import { Hero } from '../../../../base/types/hero';

// Services Import.
import { ApiService } from 'src/app/base/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ListService extends ApiService {

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * simulateLoader.
   *
   * Method for simulateLoader.
   *
   * @since 1.0.0
   * @access public
   *
   */
  simulateLoader() {
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      console.log(data)
    })
  }
}
