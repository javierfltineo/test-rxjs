import { Component, Inject, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';
// Mat MatSnackBar.
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-buysell',
  templateUrl: './buysell.component.html',
  styleUrls: ['./buysell.component.css']
})
export class BuySellComponent implements OnInit {

  ticker;
  amount;
  leverage;
  formBuySell: FormGroup;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data) {
    this.ticker = data.ticker;
    this.amount = 200;
    this.leverage = 10;

    this.createForm(); // Call action form init method.
  }

  createForm() {
    console.warn('createForm')
    this.formBuySell = this.fb.group({
      amount: [200],
      leverage: [20],
    });
  }

  ngOnInit(): void {
  }

  actionMakeOperation() {
    console.log("action Make Operation");
    if (this.formBuySell.controls.leverage.value) {
      this.leverage = this.formBuySell.controls.leverage.value;
    }

    console.log(this.leverage);
  }
}
