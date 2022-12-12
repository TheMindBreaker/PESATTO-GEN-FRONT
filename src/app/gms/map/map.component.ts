import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import * as Leaflet from 'leaflet';
import * as events from "events";
import {NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import {DeviceListComponent} from "../device-list/device-list.component";
import {DeviceService} from "../../service/device.service";
import {DeviceBasic} from "../../model/device_basic";
import {Marker} from "leaflet";
import {Device} from "../../model/device";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  markers: any;
  devices: DeviceBasic[] | undefined;
  constructor(private windowService: NbWindowService, private deviceService: DeviceService){
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

  getDevices(event: Leaflet.Map) {
    this.deviceService.getDevicesBasic().subscribe((devices) => {
      this.devices = devices;
      devices.forEach((row) => {
        const greenIcon = Leaflet.icon({
          iconUrl: 'assets/genset.png',
          iconSize:     [42, 42], // size of the icon
        });
          Leaflet.marker([row.LATITUDE, row.LONGITUDE], {icon: greenIcon, draggable: false}).bindPopup("<ul><li><strong>ID:</strong>"+row._id+"</li><li><strong>AL:</strong>"+row.ALIAS+"</li><li><strong>ST:</strong>"+row.STATUS+"</li></ul>").addTo(event);
      })
    })
  }
  map_ready(event: Leaflet.Map): void {
    this.getDevices(event);


  }

  setMarkers(map: Leaflet.Map): void {
    const greenIcon = Leaflet.icon({
      iconUrl: 'assets/genset.png',
      iconSize:     [42, 42], // size of the icon
    });
    this.devices?.forEach(data => {
      this.markers[data._id].device = data;
      this.markers[data._id].marker = Leaflet.marker([data.LATITUDE, data.LONGITUDE], {icon: greenIcon, draggable: false}).addTo(this.map);
    });

  }


  ngOnInit(): void {
  }

}
