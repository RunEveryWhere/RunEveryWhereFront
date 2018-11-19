import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  constructor() {

    if ( localStorage.getItem('markers') ) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }

   }

  ngOnInit() {
  }

  /**
   * Adds a marker to markers[]
   * @param event Clicked position of the map
   */
  addMarker( event ) {

    const marker = new Marker( event.coords.lat, event.coords.lng );
    this.markers.push( marker);
    this.saveMarkerLocalStorage();

  }

  /**
   * Saves markers[] in LocalStorage
   */
  saveMarkerLocalStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  /**
   * Deletes a marker in markers[]
   * @param i position of the marker to delete
   */
  deleteMarker(i) {
    this.markers.splice(i, 1);
    this.saveMarkerLocalStorage();
  }

}
