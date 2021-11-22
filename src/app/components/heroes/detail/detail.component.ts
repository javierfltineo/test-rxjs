// Core Imports.
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { formatDate } from '@angular/common'

// Router Imports.
import { ActivatedRoute, Router } from '@angular/router';

// Types Imports.
import { Hero } from '../../../base/types/hero';

// Angular forms Imports.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Mat MatSnackBar.
import { MatSnackBar } from '@angular/material/snack-bar';

// Services.
import { DetailService } from './service/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  // Init vars.
  formHero: FormGroup;
  hero: Hero;
  param: any; // Url param (new or null)

  // Init Selects input vars.
  valuesCivilStatus: string[] = [
    'married',
    'single'
  ];

  constructor(private fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private detailService: DetailService,
    private snackBar: MatSnackBar) {
    this.createForm(); // Call action form init method.
  }

  ngOnInit(): void {
    // set the url param.
    this.param = this.activatedRoute.snapshot.params.id;

    // If not new,edit hero type view.
    if (this.param != 'new') {
      // Call service to load action to edit.
      this.populateFormHero(this.detailService.read(this.param))
    }
  }

  /**
 * createForm.
 *
 * Method to create action (for create or edit) form.
 *
 * @since 1.0.0
 * @access public
 *
 */
  createForm() {
    console.warn('createForm')
    this.formHero = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(30)]],
      alias: ['', [Validators.required, Validators.maxLength(16)]],
      hability: ['', [Validators.required, Validators.maxLength(16)]],
      birthDate: ['', [Validators.required]],
      race: ['', [Validators.required]],
      isAlive: [false],
      canFly: [false],
      civilStatus: ['single'],
      numberOfMovies: [1, [Validators.max(999)]],
      urlImage: ['default.png'],
    });
  }

  /**
 * hasError.
 *
 * Method to check errors on heroes form.
 *
 * @since 1.0.0
 * @access public
 *
 * @param {string} property  Property.
 * @param {string} validation  Validation condition.
 *
 * @return {Boolean} return if validation is ok or not.
 */
  hasError(property: string, validation: string) {
    // Check if form and property exists.
    if (this.formHero && this.formHero.controls[property]) {
      return this.formHero.controls[property].hasError(validation);
    } else {
      return false;
    }
  }

  /**
  * navigateToActionsCancel.
  *
  * Method go to heros table from cancel button.
  *
  * @since 1.0.0
  * @access public
  */
  navigateToHeroesCancel() {
    this.router.navigate(['heroes/list']);
  }

  /**
   * save.
   *
   * Method to create or edit Hero.
   *
   * @since 1.0.0
   * @access public
   *
   */
  save() {
    console.log('save');
    // Check if formHero are invalid
    if (this.formHero.invalid) {
      return Object.values(this.formHero.controls).forEach((control) => {
        control.markAsTouched(); // show validation errors on screen.
      });
    } else {
      // call the method for populate hero object.
      this.hero = this.populateHeroRequest();
      // Check if is new hero or edit.
      if (this.param != 'new') {
        // Call hero service for create.
        this.detailService.update(this.hero);
        this.navigateToHeroes(); // go hero table.
        this.snackBar.open(this.hero.alias + ' Ha sido editado con éxito', 'X', {
          duration: 3000
        });
      } else {
        // Call hero service for create.
        this.detailService.create(this.hero);
        this.navigateToHeroes(); // go hero table.
        this.snackBar.open(this.hero.alias + ' Ha sido creado con éxito', 'X', {
          duration: 3000
        });
      }
    }
  }

  /**
 * navigateToHeroes.
 *
 * Method go to heroes table.
 *
 * @since 1.0.0
 * @access public
 */
  navigateToHeroes() {
    this.router.navigate(['heroes/list']);
  }

  /**
 * populateHeroRequest.
 *
 * Method to populate hero request before send to service.
 *
 * @since 1.0.0
 * @access public
 * @return {Hero} hero object to return.
 */
  populateHeroRequest() {
    // Initialice hero object
    const hero: Hero = new Hero();

    // Check form values.
    if (this.formHero.controls.id.value) {
      hero.id = this.formHero.controls.id.value;
    }

    if (this.formHero.controls.id.value) {
      hero.id = this.formHero.controls.id.value;
    }

    if (this.formHero.controls.name.value) {
      hero.name = this.formHero.controls.name.value;
    }

    if (this.formHero.controls.alias.value) {
      hero.alias = this.formHero.controls.alias.value;
    }

    if (this.formHero.controls.hability.value) {
      hero.hability = this.formHero.controls.hability.value;
    }

    if (this.formHero.controls.birthDate.value) {
      hero.birthDate = this.formHero.controls.birthDate.value;
    }

    if (this.formHero.controls.race.value) {
      hero.race = this.formHero.controls.race.value;
    }

    if (this.formHero.controls.isAlive.value) {
      hero.isAlive = this.formHero.controls.isAlive.value;
    } else {
      hero.isAlive = false;
    }

    if (this.formHero.controls.canFly.value) {
      hero.canFly = this.formHero.controls.canFly.value;
    } else {
      hero.canFly = false;
    }

    if (this.formHero.controls.civilStatus.value) {
      hero.civilStatus = this.formHero.controls.civilStatus.value;
    }

    if (this.formHero.controls.numberOfMovies.value) {
      hero.numberOfMovies = this.formHero.controls.numberOfMovies.value;
    }

    if (this.formHero.controls.urlImage.value) {
      hero.urlImage = this.formHero.controls.urlImage.value;
    } else {
      hero.urlImage = 'default.png';
    }

    // Return set hero.
    return hero;
  }

  /**
* populateFormHero.
*
* Method to populate hero form imputs.
*
* @since 1.0.0
* @access public
*
* @param {Hero} hero  Hero object recieved.
*/
  populateFormHero(hero: Hero) {
    this.formHero.controls.id.setValue(hero.id);
    this.formHero.controls.alias.setValue(hero.alias);
    this.formHero.controls.canFly.setValue(hero.canFly);
    this.formHero.controls.civilStatus.setValue(hero.civilStatus);
    this.formHero.controls.hability.setValue(hero.hability);
    this.formHero.controls.isAlive.setValue(hero.isAlive);
    this.formHero.controls.name.setValue(hero.name);
    this.formHero.controls.numberOfMovies.setValue(hero.numberOfMovies);
    this.formHero.controls.race.setValue(hero.race);
    this.formHero.controls.birthDate.setValue(hero.birthDate);
    this.formHero.controls.urlImage.setValue(hero.urlImage);
  }
}
