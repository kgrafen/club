import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from '../routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule, MatListModule, MatIconModule, MatExpansionModule, MatInputModule, MatButtonModule, MatChipsModule, MatSelectModule, MatGridListModule, MatSliderModule, MatSlideToggleModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatToolbarModule, MatTooltipModule, MatDialogModule, MatRadioModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatBadgeModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    RouterTestingModule,
    NgxSpinnerModule,
  ],
  declarations: [AdminDashboardComponent, AdminNavbarComponent],
  bootstrap: [AdminModule]
})
export class AdminModule { }
