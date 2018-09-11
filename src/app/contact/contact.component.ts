import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
});

  constructor() { }

  ngOnInit() {
  }

}
