// Core Items.
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

// Mat table imports.
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Mat dialog.
import { MatDialog } from '@angular/material/dialog';

// Mat MatSnackBar.
import { MatSnackBar } from '@angular/material/snack-bar';

// Types import.
import { Hero } from '../../../base/types/hero';

// Services imports.
import { ListService } from './service/list.service';

// Confirm Dialog component Import.
import { HeroesConfirmDialogComponent } from '../../../base/heroes-confirm-dialog/heroes-confirm-dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  // Table Config.
  displayedColumns: string[] = ['urlImage', 'id', 'name', 'alias',
    'hability', 'birthDate', 'race', 'isAlive', 'canFly',
    'civilStatus', 'numberOfMovies', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  heroes: Hero[] = [];
  dataSource = new MatTableDataSource();


  constructor(private router: Router, private listService: ListService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    // Call the service to load heroes table datasource.
    this.heroes = this.listService.list();
    this.dataSource = new MatTableDataSource(this.heroes);
  }

  /**
   * ngAfterViewInit.
   *
   * Method to Init mat paginator and sort.
   *
   * @since 1.0.0
   * @access public
   *
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * applyFilter.
   *
   * Method to filtered heroes table datasource.
   *
   * @since 1.0.0
   * @access public
   *
   * @param {Event} event  Event on filter imput.
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.heroes = this.listService.list(filterValue)
    this.dataSource = new MatTableDataSource(this.heroes);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
  * simulateLoader.
  *
  * Method send an http request to simulate loader.
  *
  * @since 1.0.0
  * @access public
  */
  simulateLoader() {
    this.listService.simulateLoader();
  }

  /**
  * addHero.
  *
  * Method go to create hero view.
  *
  * @since 1.0.0
  * @access public
  */
  addHero() {
    this.router.navigateByUrl('/heroes/detail/' + 'new');
  }

  /**
  * openDeleteModal.
  *
  * Method to open the delete modal dialog.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {event} event  open dialog event.
  * @param {Hero} hero    the element to delete.
  */
  openDeleteModal(event, hero: Hero): void {
    // Launch dialog.
    let dialogRef = this.dialog.open(HeroesConfirmDialogComponent, {
      data: {
        type: '',
        text: '¿Esta seguro que desea borrar a ' + hero.alias + '?',
        confirmButton: 'Borrar',
        rejectButton: 'Cancelar',
      },
    });

    // After close dialog actions.
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteHero(hero);
        this.snackBar.open(hero.alias + ' Ha sido borrado con éxito', 'X', {
          duration: 2000
        });
      }
    });
  }

  /**
   * deleteHero.
   *
   * Method to delete hero item.
   *
   * @since 1.0.0
   * @access public
   *
   * @param {Hero} hero  Hero to delete.
   */
  deleteHero(hero: Hero) {
    // Call the service to delete.
    this.heroes = this.listService.delete(hero);
    // Refresh heroes table.
    this.dataSource = new MatTableDataSource(this.heroes);
  }

  /**
  * editHero.
  *
  * Method go to edit hero view.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {number} id  Code of the hero to edit.
  */
  editHero(id: number) {
    this.router.navigateByUrl('/heroes/detail/' + id);
  }
}
