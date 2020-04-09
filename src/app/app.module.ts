import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { EventItemComponent } from './events/events-list/event-item/event-item.component';
import { RequirementEditComponent } from './requirements/requirement-edit/requirement-edit.component';
import { RequirementItemComponent } from './requirements/requirement-item/requirement-item.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { FormsModule } from "@angular/forms";
import { AddReqirementComponent } from './requirements/add-reqirement/add-reqirement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    RequirementsComponent,
    EventsListComponent,
    EventsDetailsComponent,
    EventItemComponent,
    RequirementEditComponent,
    RequirementItemComponent,
    AddEventComponent,
    AddReqirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
