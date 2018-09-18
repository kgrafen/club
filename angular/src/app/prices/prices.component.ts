import { Component, OnInit } from '@angular/core';

export interface Item {
  name: string;
  price: number;
  type: string;
}

const ITEM_DATA: Item[] = [
  {name: '1 måneds medlemsskab', price: 60, type: "engangsbeløb"},
  {name: 'Månedlig abonnement', price: 50, type: "månedlig subskription"},
]

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'type'];
  dataSource = ITEM_DATA;

  constructor() { }

  ngOnInit() {
  }

}
