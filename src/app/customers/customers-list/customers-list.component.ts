import { Component, Input, OnInit } from '@angular/core';

import { ICustomer } from "../../shared/interfaces";

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    private _customers: ICustomer[] = [];
    @Input() get customers(): ICustomer[] {
      return this._customers;
    }

    set customers(value: ICustomer[]) {
      if (value) {
        this._customers = this.filteredCustomers = value;
        this.calculateOrders();
      }
    }

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal!: number;
    currencyCode: string = 'USD';
    
    constructor() {}
    
    ngOnInit() {

    }

    calculateOrders() {
      this.customersOrderTotal = 0;
      this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal!;
      })
    }

    sort(prop: string) {
      //a sorter service will handle the sorting
    }
}