import { Component, OnInit, ViewChild } from '@angular/core';
import { TableFilterService } from '../../table-filter.service';
import { NgModel, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material';

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

  public slider1Val: Number = 100;
  public kidsAllowed: boolean = false;

  public options: Selector[] = [
    { value: '', displayValue: '' },
    { value: 'Kun for mænd', displayValue: 'Kun for mænd' },
    { value: 'Kun for kvinder', displayValue: 'Kun for kvinder' },
    { value: '50/50', displayValue: '50/50' },
    { value: 'Først til mølle', displayValue: 'Først til mølle' }];


  public categories: Selector[] = [
    { value: '', displayValue: '' },
    { value: 'Hjemmehygge', displayValue: 'Hjemmehygge' },
    { value: 'Fest i privathjem', displayValue: 'Fest i privathjem' },
    { value: 'Fest uden for privaten', displayValue: 'Fest uden for privaten' },
    { value: 'For børn', displayValue: 'For børn' },
    { value: 'Spis sammen på restuarant', displayValue: 'Spis sammen på restuarant' },
    { value: 'Biograf', displayValue: 'Biograf' },
    { value: 'Naturoplevelse', displayValue: 'Naturoplevelse' },
    { value: 'Ferie', displayValue: 'Ferie' },
    { value: 'Koncert', displayValue: 'Koncert' },
    { value: 'Kultur', displayValue: 'Kultur' },
    { value: 'Sport', displayValue: 'Sport' },
    { value: 'Andet', displayValue: 'Andet' },]

  public childrenOptions: Selector[] = [
    { value: '', displayValue: '' },
    { value: 'Kun uden børn', displayValue: 'Kun uden børn' },
    { value: 'Kun med børn', displayValue: 'Kun med børn' },
    { value: 'Børn velkomne', displayValue: 'Børn velkomne' }];

  childrenForm = new FormGroup({
    selection: new FormControl('')
  });
  categoryForm = new FormGroup({
    selection: new FormControl('')
  });
  genderForm = new FormGroup({
    selection: new FormControl('')
  });

  constructor(private tbs: TableFilterService) { }

  ngOnInit() {

  }

  onDistanceChange() {
    if (this.slider1Val != 0) {
      this.tbs.onDistanceChange(this.slider1Val);
    }
  }

  onChildrenChange(value) {
    if (value != undefined) {
      this.tbs.onChildrenChange(value);
    }
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
    this.categoryForm.get('selection').setValue('');
    this.childrenForm.get('selection').setValue('');
    this.genderForm.get('selection').setValue('');
    this.slider1Val = 100;
  }

}
