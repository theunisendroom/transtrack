import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Location } from '../../model/location.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {

  constructor(private db: AngularFireDatabase) { }

  addLocation(location: Location){
    console.log(location);
  }
}
