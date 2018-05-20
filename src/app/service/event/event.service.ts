import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Event } from '../../model/event.model';
@Injectable()
export class EventService {

  eventList: AngularFireList<any>;
  selectedEvent: Event = new Event();

  constructor(private firebase: AngularFireDatabase) {
    this.getData();
  }

  getData() {
    this.eventList = this.firebase.list('events');
    return this.eventList;
  }

  insertEvent(event: Event) {
    this.eventList.push({
      name: event.name,
      date: event.date,
      location: event.location,
      organiser: event.organiser,
      summary: event.summary
    });
  }

  updateEvent(event: Event) {
    this.eventList.update(event.$key,
      {
        name: event.name,
        date: event.date,
        location: event.location,
        organiser: event.organiser,
        summary: event.summary
      });
  }

  deleteEvent($key: string) {
    this.eventList.remove($key);
  }

}
