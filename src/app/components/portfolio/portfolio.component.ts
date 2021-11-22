// Core Items.
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { finalize, switchMap } from 'rxjs/operators';
import {interval, Observable} from 'rxjs';
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
import { MarketPortfolio } from '../../base/types/market_portfolio';

// Services imports.
import { PortfolioService } from './service/portfolio.service';

// Buy dialog
import {MatDialogModule} from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { StaticSymbolResolver } from '@angular/compiler';

// Confirm Dialog component Import.


@Component({
  selector: 'app-list',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  // Table Config.
  displayedColumns: string[] = ['urlImage', 'ticker', 'invested', 'profit', 'investmentValue', 'buyPrice', 'sellPrice', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  markets: MarketPortfolio[] = [];
  dataSource = new MatTableDataSource();


  constructor(private router: Router, private portfolioService: PortfolioService, private dialog: MatDialog, private snackBar: MatSnackBar) {
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

    this.markets = this.portfolioService.getPortfolioList();
    this.dataSource = new MatTableDataSource(this.markets);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    const clock$ = interval(2000);
    clock$.subscribe({
      next: v => {
        this.markets.forEach((market) => {
          console.log(market);
          let result = Math.floor(Math.random() * (2 - 0)) + 0;
          if (result == 1) {
            market.changeClass = market.changeClass === 'positive-change' ? 'negative-change' : 'positive-change';
          }
        });
      }
    });
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
  openDeleteModal(event, market: MarketPortfolio): void {
    // Launch dialog.

  }

}

