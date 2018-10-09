import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-authorization-alert-sheet',
  templateUrl: './authorization-alert-sheet.component.html',
  styleUrls: ['./authorization-alert-sheet.component.css']
})
export class AuthorizationAlertSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AuthorizationAlertSheetComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
