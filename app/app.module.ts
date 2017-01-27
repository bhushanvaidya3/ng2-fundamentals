import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent, EventListComponent, EventThumbnailComponent, EventDetailsComponent, NavBarComponent],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}