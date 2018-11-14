import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router, } from "@angular/router";
import { Event } from '../entity/event/event.model';
import { EventFirebaseService } from '../event-firebase.service';
import { UserFirebaseService } from '../user-firebase.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { unescapeIdentifier } from '@angular/compiler';
import { MobileDetectorService } from '../mobile-detector.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';
import { WallService } from '../wall.service';
import { Wall } from '../entity/wall/wall.model';
import { WallPost } from '../entity/wall/wall-post.model';
import { CreateWallPostComponent } from '../create-wall-post/create-wall-post.component';
import { ToastrService } from 'ngx-toastr';
import { hostname } from 'os';

export interface DialogData {
  fk_wall: string;
}

export interface User {
  username: string;
}

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  isMobile = false;

  selectedEvent = new Event({});
  key;
  pKey = "";
  participantsDisplayNames = [];
  participantsData = []
  inQueue = [];

  // Wall
  wall = new Wall({});
  wallKey = "";
  userNames = [];
  tempDate = new Date().toLocaleString();

  hostName = "...HENTER VÆRTSNAVN...";

  // Test
  isParticipating: boolean = false;

  constructor(private route: ActivatedRoute, private efbs: EventFirebaseService, 
    private ufbs: UserFirebaseService, private router: Router, 
    private md: MobileDetectorService, private authService: AuthService, 
    private ws: WallService, public dialog: MatDialog, private toast: ToastrService) { 
    this.route.queryParams.subscribe(params => {
      let key = params['key'];
      this.key = key;
      
      /* Event */
      this.efbs.getEventByKey(key).snapshotChanges().subscribe(then => {
        this.selectedEvent = new Event(then.payload.val());
        this.participantsData = [];
        this.participantsDisplayNames = [];
        for (let property in this.selectedEvent.participants) {
          for (let value in this.selectedEvent.participants[property]) {
              this.participantsDisplayNames.push(this.selectedEvent.participants[property][value]);
              this.participantsData.push({key: property, username: this.selectedEvent.participants[property][value]});
          }
        }

        /* Participation limited to one signup. */
        if (this.getParticipantKey() !== "Not Found") {
          this.isParticipating = true;
        }

        this.getHostNameFromUID(this.selectedEvent.host).then( (value:string) => {
          console.log(typeof value);
          this.hostName = value;
        });

      });

      /* Wall */
      this.ws.getWallByKey(this.key).subscribe(snapshot => {
        this.wall.posts = [];
        snapshot.forEach(value => {
          this.wall.fk_event = value.fk_event;
          this.wallKey = value.key;
          let subPosts = [];

          Object.values(value.posts).forEach(property => {
            subPosts.push(property);
          });

          let idx = 0;
          Object.keys(value.posts).forEach(k => {
            this.wall.posts.push(Object.assign(subPosts[idx], {key: k} ));
            idx++;
          });
        });
        this.updateDisplayForWall();
      });
    });
  }

  ngOnInit() {
    this.isMobile = this.md.check();
  }

  getParticipantKey(): string {
    let result = "Not Found";
    for (let i = 0; i < this.participantsData.length; i++) {
      if (this.participantsData[i].username === this.ufbs.getStorage().username) {
        return this.participantsData[i].key;
      }
    }
    return result;
  }

  removeParticipant() {
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshot => {
      let u: User = new User(snapshot);
      for (let i = 0; i < this.participantsData.length; i++) {
        if (this.participantsData[i].username === u.username)  {
          this.participantsData.splice(i, 1);
          this.participantsDisplayNames.splice(i, 1);
        }
      }
    });
  }

  onAttend() {

    this.efbs.joinEvent(this.key, this.ufbs.getStorage().username);
    this.isParticipating = true;
  }

  onUnattend() {
    this.efbs.leaveEvent(this.key, this.getParticipantKey());
    this.removeParticipant();
    this.isParticipating = false;
  }


  onRateClick() {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "key": this.key
      }
    }
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe( userSnapshot => {
      let u: User = new User(userSnapshot);
      if (this.participantsDisplayNames.includes(u.username)) {
        this.router.navigate(['/rate-event'], navigationExtras);
      } else {
        this.toast.warning('Du kan ikke rate et event, som du ikke har deltaget i','Hov!')
      }
    });
  }

  createWallPost(formData) {
    this.ws.insertPost(formData, this.key);
  }

  openWallPostDialog() {
    const dialogRef = this.dialog.open(CreateWallPostComponent, {
      width: '500px',
      data: {fk_wall: this.wallKey}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  deleteWallPost(postObj) {
    //this.wall.posts.splice(idx, 1);
    this.ws.deletePost(this.wallKey, Object.assign(postObj, WallPost));
  }

  updateDisplayForWall() {
    /* Display usernames */
    this.userNames = [];
    this.wall.posts.forEach(post => {
      this.ufbs.getUserByID(post.fk_id).subscribe( (u:any) => {
        this.userNames.push(u.username);
      });
    });
  }

  getHostNameFromUID(uid: string) {
    return new Promise( (resolve, reject) => {
      this.ufbs.getUserByID(uid).subscribe( (snapshot:any) => {
        resolve(snapshot.username);
      });
    });
  } 

}
