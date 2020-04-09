import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from "../event.models";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  MyName: string;
  MyDescription: string;
  MyImage: string;

  ngOnInit(): void {
  }

  addEvent() {
    this.eventService.addNewEvent(new Event(this.MyName, this.MyDescription, this.MyImage));
  }

}
