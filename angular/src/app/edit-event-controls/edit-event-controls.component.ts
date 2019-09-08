import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'edit-event-controls',
  templateUrl: './edit-event-controls.component.html',
  styleUrls: ['./edit-event-controls.component.css']
})

export class EditEventControlsComponent implements OnInit {

  @Input() isValid: boolean;
  @Input() isFirst: boolean;
  @Input() isLast: boolean;

  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  constructor() {}

  ngOnInit() {

  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.submit.emit();
  }

}
