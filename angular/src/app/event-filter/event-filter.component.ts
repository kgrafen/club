import { Component, OnInit} from '@angular/core';
import { TableFilterService } from '../table-filter.service';

export interface Selector {
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

  public options: Selector[] = [
                                {value: 'Kun for mænd', displayValue: 'Kun for mænd'},
                                {value: 'Kun for kvinder', displayValue: 'Kun for kvinder'},
                                {value: '50/50', displayValue: '50/50'}];

  public categories: Selector[] = [
                                  {value: 'Hjemmehygge', displayValue: 'Hjemmehygge'},
                                  {value: 'Fest i privathjem', displayValue: 'Fest i privathjem'},
                                  {value: 'Fest uden for privaten', displayValue: 'Fest uden for privaten'},
                                  {value: 'For børn', displayValue: 'For børn'},
                                  {value: 'Spis sammen på restuarant', displayValue: 'Spis sammen på restuarant'},
                                  {value: 'Biograf', displayValue: 'Biograf'},
                                  {value: 'Naturoplevelse', displayValue: 'Naturoplevelse'},
                                  {value: 'Ferie', displayValue: 'Ferie'},
                                  {value: 'Koncert', displayValue: 'Koncert'},
                                  {value: 'Kultur', displayValue: 'Kultur'},
                                  {value: 'Sport', displayValue: 'Sport'},]

  constructor(private tbs: TableFilterService) { }

  ngOnInit() {
  
  }

  onDistanceChange() {
    if (this.slider1Val != 0) {
      this.tbs.onDistanceChange(this.slider1Val);
    }
  }

  onChildrenChange() {
    this.tbs.onChildrenChange(this.kidsAllowed);
  }

  onOptionChange(value) {
    if (value != undefined) {
      this.tbs.onGenderChange(value);
    }
  }

  onCategoryChange(value) {
    this.tbs.onCategoryChange(value);
  }

  clear() {
    this.tbs.clearFilters();
  }

}
