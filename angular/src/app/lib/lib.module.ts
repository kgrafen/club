import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';


@NgModule({
  declarations: [
    AppNavbarComponent,
    YoutubeVideoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [
    AppNavbarComponent,
    YoutubeVideoComponent,
  ],
  entryComponents: [
  ]
})
export class LibModule { }
