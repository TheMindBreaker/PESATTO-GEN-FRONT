import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import * as Leaflet from 'leaflet';
import * as events from "events";
import {NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import {DeviceListComponent} from "../device-list/device-list.component";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
  constructor(private windowService: NbWindowService) {

  }
  map!: Leaflet.Map;
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      })
    ],
    zoom: 5.49,
    center: { lat: 23.2212479, lng: -110.9962219 },
    zoomControl: true
  }
  items: any;


  map_ready(event: Leaflet.Map): void {
    this.map = event;

    const greenIcon = Leaflet.icon({
      iconUrl: 'assets/genset.png',
      iconSize:     [42, 42], // size of the icon
    });
    Leaflet.marker([20.692294, -100.445357], {icon: greenIcon, draggable: false}).addTo(this.map);

  }


  ngOnInit(): void {
  }

}
