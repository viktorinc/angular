import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from "../event.models";
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  @Output() eventSelected = new EventEmitter<Event>();

  constructor(private eventService:EventService) { }
  events: Event[] ;

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.eventService.eventUpdate.subscribe((events:Event[])=>{
      this.events = events;
    });
  }

  onEventSelected(item): void {
    console.log(item);
    this.eventSelected.emit(item);
  }

}
