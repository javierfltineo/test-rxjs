// Hero Interface
export interface MarketInterface {
    id: number;
    ticker: string;
    name: string;
    marketCapitalization: number;
    price: number;
    urlImage: string;
    buyPrice: number;
    sellPrice: number;
    changeClass: string;
}

// Hero Class
export class Market implements MarketInterface {
    id: number;
    ticker: string;
    name: string;
    marketCapitalization: number;
    price: number;
    urlImage: string;
    buyPrice: number;
    sellPrice: number;
    changeClass: "positive-change" | "negative-change";
}



