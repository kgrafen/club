import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image-dialog',
  templateUrl: './profile-image-dialog.component.html',
  styleUrls: ['./profile-image-dialog.component.css']
})
export class ProfileImageDialogComponent implements OnInit {

  pictureUrl: string = '';

  constructor() { }

  ngOnInit() {
  }

  onNoClick(): void {
    // this.dialogRef.close();
  }

}
