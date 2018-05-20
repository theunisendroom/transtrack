import { Component, OnInit } from '@angular/core';

import { Event } from '../../model/event.model';
import { EventService } from '../../service/event/event.service';

import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers :[EventService]
})
export class EventsComponent implements OnInit {

  eventList: Event[];

  constructor(private eventService : EventService, private tostr: ToastrService, private router: Router) { }

  ngOnInit() {
    var x = this.eventService.getData();
    x.snapshotChanges().subscribe(item => {
      this.eventList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.eventList.push(y as Event);
      });
    });
  }

  onEdit(event: Event) {
    this.eventService.selectedEvent = Object.assign({}, event);
    this.router.navigate(['event']);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.eventService.deleteEvent(key);
      this.tostr.warning("Deleted Successfully", "Event register");
    }
  }

}
