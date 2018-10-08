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
import { AdminRoutingModule } from '../admin-routing/admin-routing.module';
import { AdminNewsletterComponent } from '../admin-newsletter/admin-newsletter.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
  ],
  exports: [
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminNewsletterComponent
  ],
  declarations: [AdminDashboardComponent, AdminNavbarComponent, AdminNewsletterComponent],
  bootstrap: []
})
export class AdminModule { }
