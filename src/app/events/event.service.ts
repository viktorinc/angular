import { Injectable, EventEmitter } from '@angular/core';
import { Event } from "./event.models";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventSelected = new EventEmitter<Event>();
  eventUpdate = new EventEmitter<Event[]>();

  private events: Event[] = [
    new Event("Course JS", "Promise and fetch", "https://i.ytimg.com/vi/IHjzyhjKxtc/maxresdefault.jpg"),
    new Event("HTML/CSS", "List in HTML", "https://o7planning.org/ru/11983/cache/images/i/21723546.png"),
    new Event("React", "Work with routing components", "https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e")
  ]

  getEvents(): Event[] {
    return this.events.slice();
  }

  addNewEvent(data: Event) {
    this.events.push(data);
    this.eventUpdate.emit(this.events);
  }

  deleteCurrentEvent() {
    this.events.splice(0, 1);
    this.eventUpdate.emit(this.events);
  }

  constructor() { }
}
