import { Component, OnInit } from '@angular/core';
import { UserFirebaseService } from '../user-firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public isMobile: boolean = false;

  constructor(private ufbs: UserFirebaseService, private authService: AuthService) { 

    this.ufbs.getUserByEmail(this.authService.user.email);

  }

  username: string = "Indlæser...";
  email: string = "Indlæser...";

  public profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
});

  ngOnInit() {

    if (window.screen.width <= 600) {
      this.isMobile = true;
    }

    this.ufbs.getUserByEmail(this.authService.user.email);
    this.username = this.ufbs.user._username;
    this.email = this.ufbs.user.email;
    console.log(this.username + ", " + this.email);

  }

  onUpdateProfile(formData) {

  }

}
