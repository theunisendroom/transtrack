import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../service/geo/geo.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-gmap',
  templateUrl: './my-gmap.component.html',
  styleUrls: ['./my-gmap.component.css']
})
export class MyGmapComponent implements OnInit {

  currentUserLocation = {lat:0, lng :0};
  locationsObservable: Observable<any[]>;
  
  //option menu vars
  options: [String] = ['Add location'];
  showOptionsBoolean: Boolean = false;
  optionsLocation = {lat:0, lng:0};

  constructor(private geo: GeoService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getUserCurrentLocation();
    this.locationsObservable = this.getLocations('/locations');
  }

  getUserCurrentLocation(): any {
    /// locate the user
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.currentUserLocation.lat = position.coords.latitude;
        this.currentUserLocation.lng = position.coords.longitude;
      });
    }
  }

  getLocations(listPath) : Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  } 

  showOptions(event, showOrNot: Boolean){
    this.optionsLocation = event.coords;
    this.showOptionsBoolean= showOrNot;
  }
}
