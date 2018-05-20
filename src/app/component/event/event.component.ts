import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EventService } from '../../service/event/event.service';
import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers :[EventService]
})
export class EventComponent implements OnInit {

  constructor(private eventService : EventService, private tostr: ToastrService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.eventService.selectedEvent = this.route.paramMap
    // .switchMap((params: ParamMap) =>
    //   this.eventService.getHero(params.get('id')));
  }

  onSubmit(eventForm: NgForm) {
    if (eventForm.value.$key == null)
      this.eventService.insertEvent(eventForm.value);
    else
      this.eventService.updateEvent(eventForm.value);
    this.resetForm(eventForm);
    this.tostr.success('Submitted Succcessfully', 'Event Register');
  }

  resetForm(eventForm?: NgForm) {
    if (eventForm != null)
    eventForm.reset();
    this.eventService.selectedEvent = {
      $key : null,
      name : '',
      date : null,
      location : '',
      organiser : '',
      summary  : ''
    }
  }
}
