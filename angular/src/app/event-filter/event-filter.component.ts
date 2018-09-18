import { Component, OnInit} from '@angular/core';

export interface Gender {
  value: string;
  displayValue: string;
}

@Component({
  selector: 'event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.css']
})
export class EventFilterComponent implements OnInit {

  public slider1Val: Number = 10;
  public kidsAllowed: boolean = false;

  public options: Gender[] = [{value: 'onlyMen', displayValue: 'Kun for mænd'},
                              {value: 'onlyWomen', displayValue: 'Kun for kvinder'},
                              {value: '50/50', displayValue: '50/50'}];

  constructor() { }

  ngOnInit() {
  }

}
