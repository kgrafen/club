import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.css']
})
export class PatchNotesComponent implements OnInit {

  displayNavbar = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.displayNavbar = true;
      }
    });
  }

}
