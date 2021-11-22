// Core Imports
import { Injectable } from '@angular/core';

// Moks Imports
import { HEROES } from '../moks/heroes';

// Types Imports
import { Hero } from '../types/hero';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  // Init vars.
  options: any;
  baseURI: string;
  heroes: Hero[] = HEROES;

  constructor() { }

  /**
  * list.
  *
  * Method to list or filter the heroes.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {any} options  string to filter frequently.
  *
  * @return {Hero[]} this.heroes  Array of heroes.
  */
  list(options?: any): Hero[] {
    // Check options
    if (options != null && options != '') {
      var filteredHeroes: Hero[] = this.heroes.filter(hero => hero.alias.toUpperCase().includes(options.toUpperCase())); // Filtered by Alias.
      return filteredHeroes;
    }
    return this.heroes;
  }

  /**
  * create.
  *
  * Method to create a hero.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {Hero} hero  Hero to create.
  *
  */
  create(hero: Hero) {
    hero.id = this.heroes.length + 1 // set id.
    this.heroes.push(hero)           // add hero.
  }

  /**
  * read.
  *
  * Method to read a hero.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {number} id  Hero id to read.
  *
  * @return {Hero} hero.
  */
  read(id: number): Hero {
    const elementIndex = this.heroes.findIndex(element => element.id == id) // Find index.
    return this.heroes[elementIndex];
  }

  /**
  * delete.
  *
  * Method to delete a hero.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {Hero} hero  Hero to delete.
  *
  * @return {Hero[]} heroes.
  */
  delete(hero: Hero): Hero[] {
    const elementIndex = this.heroes.findIndex(element => element.id == hero.id) // Find index.
    this.heroes.splice(elementIndex, 1); // Remove from array.
    return this.heroes;
  }

  /**
  * update.
  *
  * Method to update a hero.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {Hero} hero  Hero to update.
  *
  */
  update(hero: Hero) {
    let updateItem = this.heroes.find(this.findIndexToUpdate, hero.id);
    let index = this.heroes.indexOf(updateItem);
    this.heroes[index] = hero;
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
