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
import { NgxSpinnerService } from 'ngx-spinner';
import { DataSnapshot } from '@firebase/database';
import { DatabaseSnapshot } from 'angularfire2/database';

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
  hasOptions = true;
  isParticipating = false;

  selectedEvent = new Event({});
  key;
  pKey = "";
  participantsDisplayNames = [];
  participantsData = []
  
  // inQueue
  queueDisplayNames = [];
  queueData = [];

  // Wall
  wall = new Wall({});
  wallKey = "";
  // userNames = [];
  tempDate = new Date().toLocaleString();
  wallIsEmpty = true;

  hostName = "...HENTER VÆRTSNAVN...";


  constructor(private route: ActivatedRoute, private efbs: EventFirebaseService, 
    private ufbs: UserFirebaseService, private router: Router, 
    private md: MobileDetectorService, private authService: AuthService, 
    private ws: WallService, public dialog: MatDialog, private toast: ToastrService) { 

      let observer = this.route.queryParams.subscribe(params => {
      let key = params['key'];
      this.key = key;
      this.getDisplayData();
      this.getWall();
    });
  }

  ngOnInit() {
    this.isMobile = this.md.check();
  }

  getParticipantKey(): Promise<string> {
    let isDone = false;
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < this.participantsData.length; i++) {
        const observerSeven = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe((userSnapshot:any) => {
          if (this.participantsData[i].username ===  userSnapshot.username || this.queueData[i].username === userSnapshot.username) {
            isDone = true;
            resolve(userSnapshot.username);
          } 
          observerSeven.unsubscribe();
        });
      }
      if (isDone) {
        resolve("Not Found");
      }
    });
  }

  removeParticipant() {
    let observerFour = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshot => {
      let u: User = new User(snapshot);
      for (let i = 0; i < this.participantsData.length; i++) {
        if (this.participantsData[i].username === u.username)  {
          this.participantsData.splice(i, 1);
          this.participantsDisplayNames.splice(i, 1);
        }
        if (this.queueDisplayNames[i].username === u.username) {
          this.queueData.splice(i, 1);
          this.queueDisplayNames.splice(i,1);
        }
      }
      observerFour.unsubscribe();
    });
  }

  onAttend() {
    const observer = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe( (user:any) => {
      this.efbs.signupVerification(this.key, user).then( resolve => {
        if (resolve) {
          this.isParticipating = true;
          this.getDisplayData();
        }  
      });
      observer.unsubscribe();
    });
  }

  onUnattend() {
    this.efbs.leaveEvent(this.key, this.authService.afAuth.auth.currentUser.uid);
    this.isParticipating = false;
    this.getDisplayData();
  }


  onRateClick() {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "key": this.key
      }
    }
    let observerFive = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe( userSnapshot => {
      let u: User = new User(userSnapshot);
      if (this.participantsDisplayNames.includes(u.username)) {
        this.router.navigate(['/rate-event'], navigationExtras);
      } else {
        this.toast.warning('Du kan ikke rate et event, som du ikke har deltaget i','Hov!')
      }
      observerFive.unsubscribe();
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

  // updateDisplayForWall() {
  //   /* Display usernames */
  //   this.userNames = [];
  //   this.wall.posts.forEach(post => {
  //     const observerSix = this.ufbs.getUserByID(post.fk_id).subscribe( (u:any) => {
  //       if (u !== null) {
  //         this.userNames.push(u.username);
  //       }
  //       observerSix.unsubscribe();
  //     });
  //   });
  // }

  getHostNameFromUID(uid: string) {
    return new Promise( (resolve, reject) => {
      let observer = this.ufbs.getUserByID(uid).subscribe( (snapshot:any) => {
        resolve(snapshot.username);
        observer.unsubscribe();
      });
    });
  } 

  getDisplayData() {
    /* Event */
    let observerTwo = this.efbs.getEventByKey(this.key).snapshotChanges().subscribe(then => {
      this.renderParticipantsIntoView(then);
      this.renderParticipantsInQueueIntoView(then);
      /* Participation limited to one signup. */
      this.getParticipantKey().then(resolved => {
        console.log(resolved);
        if (resolved !== "Not Found") {
          this.isParticipating = true;
        } else {
          this.isParticipating = false;
        }
      });

      this.getHostNameFromUID(this.selectedEvent.host).then( (value:string) => {
        this.hostName = value;
      });
      observerTwo.unsubscribe();
      
      if (this.selectedEvent.host === this.authService.afAuth.auth.currentUser.uid) {
        console.log(this.selectedEvent.host, this.authService.afAuth.auth.currentUser.uid);
        this.hasOptions = false;
      }
    });
  }

  getWall() {
    /* Wall */
    let observerThree = this.ws.getWallByKey(this.key).subscribe(wallSnapshot => {
      if (wallSnapshot[0].posts) {
        Object.keys(wallSnapshot[0].posts).forEach(key => {
          const wallPostObj = wallSnapshot[0].posts[key];
          let observerFour = this.ufbs.getUserByID(wallPostObj.fk_id).subscribe( (userSnapshot:any) => {
            let mergedObj = {...wallPostObj, ...{username: userSnapshot.username}};
            console.log(mergedObj);
            this.wall.posts.push(mergedObj);
            // observerFour.unsubscribe();
          });
        });
        // observerThree.unsubscribe();
        this.wallIsEmpty = false;
      } 
    });
  }

  renderParticipantsIntoView(then) {
    this.selectedEvent = new Event(then.payload.val());
    this.participantsData = [];
    this.participantsDisplayNames = [];
    for (let property in this.selectedEvent.participants) {
      for (let value in this.selectedEvent.participants[property]) {
            this.participantsDisplayNames.push(this.selectedEvent.participants[property][value]);
            this.participantsData.push({key: property, username: this.selectedEvent.participants[property][value]});
      }
    }
  }

  renderParticipantsInQueueIntoView(then) {
    this.selectedEvent = new Event(then.payload.val());
    this.queueData = [];
    this.queueDisplayNames = [];
    for (let property in this.selectedEvent.inQueue) {
      for (let value in this.selectedEvent.inQueue[property]) {
          this.queueDisplayNames.push(this.selectedEvent.inQueue[property][value]);
          this.queueData.push({key: property, username: this.selectedEvent.inQueue[property][value]});
      }
    }
  }
}
