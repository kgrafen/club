import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new-event/new-event.component';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFilterComponent } from './event-filter/event-filter.component';
import { EventControlMenuComponent } from './event-control-menu/event-control-menu.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatFormFieldModule, 
         MatTableModule, 
         MatPaginatorModule, 
         MatOptionModule, 
         MatSelectModule, 
         MatSliderModule, 
         MatCardModule,
         MatInputModule, 
         MatButtonModule, 
         MatGridListModule, 
         MatCheckboxModule 
        } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LibModule } from '../lib/lib.module';


@NgModule({
  declarations: [
    EventsComponent,
    NewEventComponent,
    EventListComponent,
    EventFilterComponent,
    EventControlMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LibModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
  ],
  exports: [
    EventsComponent,
  ],
  entryComponents: [
    NewEventComponent,
  ]
})
export class EventsModule { }
