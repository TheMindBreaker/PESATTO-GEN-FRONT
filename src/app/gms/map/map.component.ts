import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import * as events from "events";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map!: Leaflet.Map;
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      })
    ],
    zoom: 5.49,
    center: { lat: 23.2212479, lng: -110.9962219 },
    zoomControl: false
  }


  map_ready(event: any): void {
    const greenIcon = Leaflet.icon({
      iconUrl: 'assets/genset.png',
      iconSize:     [38, 95], // size of the icon
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    Leaflet.marker([51.5, -0.09], {icon: greenIcon}).addTo(this.map);

  }


  ngOnInit(): void {
  }

}
