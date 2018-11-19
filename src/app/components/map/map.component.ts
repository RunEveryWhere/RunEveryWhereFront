import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  constructor( public snackBar: MatSnackBar ) {

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

    this.snackBar.open('Markers Added', 'Close', { duration: 3000 });

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
    this.snackBar.open('Marker deleted', 'Close', { duration: 3000 });
  }

}
