import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IndexMap } from '@firebase/database/dist/src/core/snap/IndexMap';
import { DialogService } from '../dialog.service';
import { Observable } from '@firebase/util';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';
import { User } from '../entity/user/user';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  messages = [
    {msg: "Her kan du finde alle events som brugerne er arrangøre af netop nu!", title: "Tip"},
    {msg: "Du kan filtrere ved brug af vinduet: filter til venstre eller ved brug af søgefeltet", title: "Tip"},
    {msg: "Brug knapperne til at gå til dine egne events, oprette et nyt eller fjerne filtre", title: "Tip"}
  ]

  public isMobile: boolean = false;

  constructor(private authService: AuthService, private ufbs: UserFirebaseService,
    private toast: ToastrService) { }

  ngOnInit() {
    if (window.screen.width <= 600) {
      this.isMobile = true;
    } 
    this.newUserRoutine();
  }

  newUserRoutine() {
    const firebaseUser = this.authService.afAuth.auth.currentUser;
    let userExists = false;
    let u: User;
    
    let observer = this.ufbs.getList().subscribe( userSnapshots => {
      userSnapshots.forEach(userSnapshot => {
        if (userSnapshot.key === firebaseUser.uid) {
          userExists = true;
          u = new User(userSnapshot.payload.val());
          console.log(userSnapshot.payload.val());
        }
      });
      if (!userExists) {
        const userEntity: User = new User({"username": firebaseUser.displayName, "email": firebaseUser.email});
        const date = new Date();
        date.setUTCFullYear(2019, 0, 1);
        userEntity.subscribed_until = date;
        userEntity.isActivated = false;
        this.ufbs.insertUser(userEntity, firebaseUser.uid);
      } else {
        console.log(this.authService.isDeletingUser, u.isActivated);
        if (u.isActivated === false && !this.authService.isDeletingUser) {
          this.toast.warning('Din profil er ikke aktiv. For at aktivere skal du udfylde "Min Profil"','Hov!');
        } 
      }
      observer.unsubscribe();
    });

  }

}
