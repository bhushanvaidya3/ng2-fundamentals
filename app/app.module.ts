import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventService,
    EventListResolver,
    EventListComponent,
    EventRouteActivator,
    EventThumbnailComponent,
    SessionListComponent   
 } from './events/index';
import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { ToastrService } from './common/toastr.service';
import { CollapsibleWellComponent  } from './common/collapsible-well.component';
import { AuthService } from './user/auth.service';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [ EventsAppComponent, 
                    EventListComponent, 
                    EventThumbnailComponent, 
                    EventDetailsComponent, 
                    NavBarComponent, 
                    CreateEventComponent, 
                    CreateSessionComponent, 
                    Error404Component, 
                    SessionListComponent,
                    CollapsibleWellComponent],
    providers: [EventService, 
                ToastrService, 
                EventRouteActivator,
                EventListResolver,
                AuthService,
                {provide: 'canDeactivateCreateEvent', useValue: EventService}],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}