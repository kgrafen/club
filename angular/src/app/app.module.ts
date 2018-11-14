import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';


//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Environment
import { environment } from '../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

//Ngb bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { DummyListComponent } from './dummy-list/dummy-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoggedinDashboardComponent } from './loggedin-dashboard/loggedin-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { MyEventComponent } from './my-event/my-event.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { RateEventComponent } from './rate-event/rate-event.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { PaymentComponent } from './payment/payment.component';
import { PricesComponent } from './prices/prices.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFilterComponent } from './event-filter/event-filter.component';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { EventsComponent } from './events/events.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { UserImageGalleryComponent } from './user-image-gallery/user-image-gallery.component';
import { EventControlMenuComponent } from './event-control-menu/event-control-menu.component'; 
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { CookiesConsentComponent } from './cookies-consent/cookies-consent.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MobileLoginHeaderComponent } from './mobile-login-header/mobile-login-header.component';

// Routing
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule, routingModule } from './routing.module'

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material and animation
import {MatButtonModule, MatNativeDateModule, MatCheckboxModule, MatProgressBarModule, MatCard, MatCardModule, MatListModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatSelectModule, MatGridListModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatTableModule, MatPaginatorModule, MatMenuModule, MatToolbarModule, MatTooltipModule, MatDialogModule, MatRadioModule, MatStepperModule, MatBadgeModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';

// Modal gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import { ModalGalleryModule } from 'angular-modal-gallery';

// Font Awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Cookies
import { CookieService } from 'angular2-cookie/services/cookies.service';

// Web storage
import { AngularWebStorageModule } from 'angular-web-storage';
import { HttpClientModule } from '@angular/common/http';

// Test suite
import { RouterTestingModule } from '@angular/router/testing';

// Pipes
import { ActiveBlockedPipe } from './pipes/active-blocked.pipe';

// Spinner
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './core/auth.guard';

// Toaster
import { ToastrModule } from 'ngx-toastr';
import { CreateWallPostComponent } from './create-wall-post/create-wall-post.component';
import { AttendedEventsComponent } from './attended-events/attended-events.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    DummyListComponent,
    LandingPageComponent,
    LoggedinDashboardComponent,
    PageNotFoundComponent,
    FooterComponent,
    EventListComponent,
    EventFilterComponent,
    LandingPageHeaderComponent,
    CreateAccountFormComponent,
    CreateNewEventComponent,
    EventsComponent,
    MyProfileComponent,
    ImageUploadComponent,
    UserImageGalleryComponent,
    EventControlMenuComponent,
    FeedbackComponent,
    AboutComponent,
    ContactComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    TermsOfServiceComponent,
    CookiesConsentComponent,
    PrivacyPolicyComponent,
    ActiveBlockedPipe,
    MobileLoginHeaderComponent,
    MyEventsComponent,
    PaymentComponent,
    PricesComponent,
    MyEventComponent,
    PatchNotesComponent,
    ViewEventComponent,
    ConfirmationDialogComponent,
    RateEventComponent,
    CreateWallPostComponent,
    AttendedEventsComponent
  ],
  entryComponents: [MobileLoginHeaderComponent, ConfirmationDialogComponent, CreateWallPostComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    ModalGalleryModule.forRoot(),
    AngularFontAwesomeModule,
    AngularWebStorageModule,
    MatProgressBarModule,
    HttpClientModule,
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
    HttpModule,
    AdminModule,
    ToastrModule.forRoot(),
    RoutingModule
  ],
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent]
})



export class AppModule { }
