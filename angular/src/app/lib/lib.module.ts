import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileImageDialogComponent } from './dialogs/profile-image-dialog/profile-image-dialog.component';


@NgModule({
  declarations: [
    AppNavbarComponent,
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
    RouterModule
  ],
  exports: [
    AppNavbarComponent,
    ProfileImageDialogComponent,
  ],
  entryComponents: [
    ProfileImageDialogComponent,
  ]
})
export class LibModule { }
