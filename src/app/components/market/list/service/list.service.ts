// core Import.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Enviroment Import.
import { environment } from 'src/environments/environment';

// Types Imports.
import { Market } from '../../../../base/types/market';

// Services Import.

import {HttpHeaders} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Object> {
    const header = new HttpHeaders();

    const options =  ({
    });
    return this.http.get('https://finnhub.io/api/v1/index/constituents?symbol=^NDX&token=sandbox_c5vdq32ad3idg9aml3c0', options);
  }

  getMarketData(ticker:string) : Observable<Object> {
    const url = 'https://finnhub.io/api/v1/market/profile2?symbol=' + ticker + '&token=sandbox_c5vdq32ad3idg9aml3c0';
    return this.http.get(url, ({}))
  }

}
