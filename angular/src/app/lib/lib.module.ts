import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule, MatFormFieldModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { ProfileImageDialogComponent } from './dialogs/profile-image-dialog/profile-image-dialog.component';


@NgModule({
  declarations: [
    AppNavbarComponent,
    YoutubeVideoComponent,
    ProfileImageDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    AppNavbarComponent,
    YoutubeVideoComponent,
    ProfileImageDialogComponent,
  ],
  entryComponents: [
    ProfileImageDialogComponent,
  ]
})
export class LibModule { }
