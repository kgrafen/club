import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from '../routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule, MatListModule, MatIconModule, MatExpansionModule, MatInputModule, MatButtonModule, MatChipsModule, MatSelectModule, MatGridListModule, MatSliderModule, MatSlideToggleModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatToolbarModule, MatTooltipModule, MatDialogModule, MatRadioModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatBadgeModule, MatBottomSheetModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { AdminRoutingModule } from '../admin-routing/admin-routing.module';
import { AdminNewsletterComponent } from '../admin-newsletter/admin-newsletter.component';
import { AuthGuard } from '../core/auth.guard';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAuthModule
  ],
  exports: [
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminNewsletterComponent
  ],
  declarations: [AdminDashboardComponent, AdminNavbarComponent, AdminNewsletterComponent],
  providers: [AuthGuard],
  entryComponents: [],
  bootstrap: []
})
export class AdminModule { }
