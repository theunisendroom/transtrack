import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as GeoFire from "geofire";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GeoService {

  dbRef: any;
  geoFire: any;

  hits = new BehaviorSubject([])

  constructor(private db: AngularFireDatabase) {
    /// Reference database location for GeoFire
    const firebaseRef = this.db.database.ref().child('locations');
    this.geoFire = new GeoFire(firebaseRef);
  }
  /// Adds GeoFire data to database
  setLocation(key:string, coords: Array<number>) {
    this.geoFire.set(key, coords)
      .then(_ => console.log('Location updated'))
      .catch(err => console.log(err))
  }

  /// Queries database for nearby locations, then maps the BehaviorSubject
  getLocations(radius: number, coords: Array<number>){
    this.geoFire.query({
      center: coords,
      radius: radius
    })
    .on('key_entered', (key, location, distance) => {
      let hit = {
        location: location,
        distance: distance
      }

      let currentHits = this.hits.value;
      currentHits.push(hit);
      this.hits.next(currentHits);
    })
  }
}
