import { Component, OnInit, Input } from '@angular/core';
import {Event} from "../event.models";

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  constructor() { }
  @Input() eventDetail:Event;

  ngOnInit(): void {
  }

}
