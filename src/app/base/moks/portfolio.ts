// Type Import.
import { MarketPortfolio } from '../types/market_portfolio';

// Mock of 9 heroes.
export const PORTFOLIO_STOCKS : MarketPortfolio[] = [
  {
    "id": 1,
    "ticker" : "AAPL",
    "name": "Apple",
    "marketCapitalization" : 1234,
    "price" : 1,
    "urlImage": "https://finnhub.io/api/logo?symbol=AAPL",
    "invested" : 200,
    "profit" : -10,
    "investmentValue" : 190,
    "buyPrice" : 684.43,
    "sellPrice" : 684.11,
    "changeClass" : "positive-change",
  },
  {
    "id": 2,
    "ticker" : "NFLX",
    "name": "Netflix",
    "marketCapitalization" : 1234,
    "price" : 1,
    "urlImage": "https://finnhub.io/api/logo?symbol=NFLX",
    "invested" : 400,
    "profit" : 15,
    "investmentValue" : 415,
    "buyPrice" : 684.43,
    "sellPrice" : 684.11,
    "changeClass" : "positive-change",
  },
]
