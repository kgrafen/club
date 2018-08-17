import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


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

// Services
import { AuthService } from './auth.service';

// Routing
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventFilterComponent } from './event-filter/event-filter.component';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateNewEventComponent } from './create-new-event/create-new-event.component';
import { EventsComponent } from './events/events.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

// Material and animation
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatTabsModule} from '@angular/material/tabs';
import { ImageUploadComponent } from './image-upload/image-upload.component';

// Modal gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery
import { ModalGalleryModule } from 'angular-modal-gallery';
import { UserImageGalleryComponent } from './user-image-gallery/user-image-gallery.component'; // 

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
    UserImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    ModalGalleryModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
