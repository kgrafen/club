import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ViewEventComponent, DialogData } from '../view-event/view-event.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WallService } from '../wall.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-wall-post',
  templateUrl: './create-wall-post.component.html',
  styleUrls: ['./create-wall-post.component.css']
})
export class CreateWallPostComponent implements OnInit {

  wallPostForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ViewEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private _formBuilder: FormBuilder, private ws: WallService, 
    private authService: AuthService) { }

  ngOnInit() {
    this.wallPostForm = this._formBuilder.group({
      message: ['', Validators.required],
    });
  }

  insertWallPost(formData) {
    console.log(formData, this.data.fk_wall);
    this.ws.insertPost({fk_id: this.authService.afAuth.auth.currentUser.uid, message: formData.message}, this.data.fk_wall);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
