import { Router } from '@angular/router';
import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import * as Leaflet from 'leaflet';
import * as events from "events";
import {NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import {DeviceListComponent} from "../device-list/device-list.component";
import {DeviceService} from "../../service/device.service";
import {DeviceBasic} from "../../model/device_basic";
import {Marker} from "leaflet";
import {Device} from "../../model/device";
import { routes } from '@nebular/auth';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  markers: any;
  devices: Array<DeviceBasic> = [];
  constructor(private windowService: NbWindowService, private deviceService: DeviceService, private r:Router){
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

  items: { id: any, color: any }[] = [];

  getDevices(event: Leaflet.Map) {
    this.deviceService.getDevicesBasic().subscribe((devices) => {
      this.devices = devices;
      if (devices[0].STATUS) {
        this.items = [{
          id: devices[0].IDENTIFIER,
          color: 'green'
        }]
      }else{
        this.items = [{
          id: devices[0].IDENTIFIER,
          color: 'red'
        }]
      }
      
      
      console.log(this.items);
      console.log(this.devices);
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

  list(){
    this.r.navigateByUrl('https://outlook.office.com/mail/')
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
