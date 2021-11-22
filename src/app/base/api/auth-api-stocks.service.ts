// Core Imports
import { Injectable } from '@angular/core';

// Moks Imports
import { STOCKS } from '../moks/markets';

// Types Imports
import { Market } from '../types/market';

@Injectable({
  providedIn: 'root'
})
export class AuthApiMarketService {

  // Init vars.
  options: any;
  baseURI: string;
  markets: Market[] = STOCKS;

  constructor() { }

  /**
  * list.
  *
  * Method to list or filter the markets.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {any} options  string to filter frequently.
  *
  * @return {Market[]} this.markets  Array of markets.
  */
  list(options?: any): Market[] {
    // Check options
    if (options != null && options != '') {
      var filteredMarketes: Market[] = this.markets.filter(market => market.name.toUpperCase().includes(options.toUpperCase())); // Filtered by Alias.
      return filteredMarketes;
    }
    return this.markets;
  }

  /**
  * create.
  *
  * Method to create a market.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {Market} market  Market to create.
  *
  */
  create(market: Market) {
    market.id = this.markets.length + 1 // set id.
    this.markets.push(market)           // add market.
  }

  /**
  * read.
  *
  * Method to read a market.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {number} id  Market id to read.
  *
  * @return {Market} market.
  */
  read(id: number): Market {
    const elementIndex = this.markets.findIndex(element => element.id == id) // Find index.
    return this.markets[elementIndex];
  }

  /**
  * delete.
  *
  * Method to delete a market.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {Market} market  Market to delete.
  *
  * @return {Market[]} markets.
  */
  delete(market: Market): Market[] {
    const elementIndex = this.markets.findIndex(element => element.id == market.id) // Find index.
    this.markets.splice(elementIndex, 1); // Remove from array.
    return this.markets;
  }

  /**
  * update.
  *
  * Method to update a market.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {Market} market  Market to update.
  *
  */
  update(market: Market) {
    let updateItem = this.markets.find(this.findIndexToUpdate, market.id);
    let index = this.markets.indexOf(updateItem);
    this.markets[index] = market;
  }

  /**
  * findIndexToUpdate.
  *
  * Method for check if newItem.id === this.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {any} newItem  Item to update.
  *
  * @return {Boolean}
  */
  findIndexToUpdate(newItem: any): Boolean {
    return newItem.id === this;
  }
}
