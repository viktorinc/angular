import { Component, OnInit, Input } from '@angular/core';
import {Event} from "../../event.models";
import { EventService } from '../../event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() myEvent:Event;
  
  constructor(private eventService:EventService) { }

  ngOnInit(): void {

  }

  onSelected() {
    this.eventService.eventSelected.emit(this.myEvent);
  }

  deleteEvent() {
    this.eventService.deleteCurrentEvent();
  }

}
