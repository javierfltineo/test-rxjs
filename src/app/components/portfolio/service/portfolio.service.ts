// core Import.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Enviroment Import.
import { environment } from 'src/environments/environment';

// Types Imports.
import { MarketPortfolio } from '../../../base/types/market_portfolio';
import { PORTFOLIO_STOCKS } from '../../../base/moks/portfolio';


import {HttpHeaders} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {
  }

  getPortfolioList(): MarketPortfolio[] {
    return PORTFOLIO_STOCKS;
  }

}
