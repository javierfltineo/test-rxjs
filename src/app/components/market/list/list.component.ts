// Core Items.
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { finalize, switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

// Mat table imports.
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Mat dialog.
import { MatDialog } from '@angular/material/dialog';

// Mat MatSnackBar.
import { MatSnackBar } from '@angular/material/snack-bar';

// Types import.
import { Market } from '../../../base/types/market';

// Services imports.
import { ListService } from './service/list.service';

// Buy dialog
import {MatDialogModule} from '@angular/material/dialog';
import { BuySellComponent } from '../buysell/buysell.component';
import { filter } from 'rxjs/operators';
import { StaticSymbolResolver } from '@angular/compiler';

// Confirm Dialog component Import.


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  // Table Config.
  displayedColumns: string[] = ['urlImage', 'ticker', 'name', 'marketCapitalization', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  markets: Market[] = [];
  dataSource = new MatTableDataSource();


  constructor(private router: Router, private listService: ListService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    // Call the service to load markets table datasource.


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

    this.listService.getList().pipe(
      map((x: any) => x['constituents']),
      filter((x: any) => x.symbol != '^NDX'),
    ).subscribe((symbols : any[]) => {
      symbols.forEach( symbol => {
        this.listService.getMarketData(symbol).pipe(
        ).subscribe((completeMarket: any) => {
          let market = new Market();
          market.name = completeMarket['name'];
          market.ticker = completeMarket['ticker'];
          market.urlImage = 'https://finnhub.io/api/logo?symbol=' + completeMarket['ticker'];
          market.marketCapitalization = completeMarket['marketCapitalization'];
          this.markets.push(market);
          this.dataSource = new MatTableDataSource(this.markets);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        })
      });
    });



    /*this.listService.getList().subscribe((data : any[]) => {   // data is already a JSON object
      data = data['constituents'].slice(0, 10);
      data.forEach(symbol => {
        const market = new Market();
        market.ticker = symbol;
        this.listService.getMarketData(market.ticker).subscribe((completeMarket : any[]) => {
          market.name = completeMarket['name'];
          market.urlImage = 'https://finnhub.io/api/logo?symbol=' + market.ticker;
          market.marketCapitalization = completeMarket['marketCapitalization'];
        });
        this.markets.push(market);
        this.dataSource = new MatTableDataSource(this.markets);
        this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      });*/
  }

  buyMarket(market: Market) {
    let dialogRef = this.dialog.open(BuySellComponent, {
      height: '400px',
      width: '600px',
      data : {
        'ticker': market.ticker,
      },
    });
  }

  /**
   * applyFilter.
   *
   * Method to filtered markets table datasource.
   *
   * @since 1.0.0
   * @access public
   *
   * @param {Event} event  Event on filter imput.
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    let filtered_markets = this.markets.filter((x) => x.ticker.includes(filterValue));
    this.dataSource = new MatTableDataSource(filtered_markets);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  /**
  * addMarket.
  *
  * Method go to create market view.
  *
  * @since 1.0.0
  * @access public
  */
  addMarket() {
    this.router.navigateByUrl('/markets/detail/' + 'new');
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
  * @param {Market} market    the element to delete.
  */
  openDeleteModal(event, market: Market): void {
    // Launch dialog.

  }

  /**
   * deleteMarket.
   *
   * Method to delete market item.
   *
   * @since 1.0.0
   * @access public
   *
   * @param {Market} market  Market to delete.
   */
  deleteMarket(market: Market) {
    // Call the service to delete.
    //this.markets = this.listService.delete(market);
    // Refresh markets table.
    this.dataSource = new MatTableDataSource(this.markets);
  }

  /**
  * editMarket.
  *
  * Method go to edit market view.
  *
  * @since 1.0.0
  * @access public
  *
  * @param {number} id  Code of the market to edit.
  */
  editMarket(id: number) {
    this.router.navigateByUrl('/markets/detail/' + id);
  }
}

