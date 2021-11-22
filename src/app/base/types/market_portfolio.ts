import { Market, MarketInterface } from './market'

export interface MarketPortfolioInterface extends MarketInterface {
    invested: number;
    profit: number;
    investmentValue: number;
}

// Hero Class
export class MarketPortfolio extends Market implements MarketPortfolioInterface {
  invested: number;
  profit: number;
  investmentValue: number;
}



