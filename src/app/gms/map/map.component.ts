import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';
import {NbWindowService} from '@nebular/theme';
import {DeviceService} from "../../service/device.service";

import {SocketDeviceMapService} from "../../service/socketDeviceMap";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  deviceId: string[] = []
  constructor(private windowService: NbWindowService, private deviceService: DeviceService, private r:Router, private socketDevice: SocketDeviceMapService){
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

  items: {realId: string, id: any, color: any, lastup: string}[] = [];

  getDevices(event: Leaflet.Map) {
    this.deviceService.getDevicesBasic().subscribe((devices) => {

      devices.forEach((row) => {
        const greenIcon = Leaflet.icon({
          iconUrl: 'assets/genset.png',
          iconSize:     [42, 42], // size of the icon
        });

        this.deviceId.push(row._id);

        if (row.STATUS) {
          this.items.push({
            realId: row._id,
            id: row.ALIAS,
            color: 'green',
            lastup: ''
          });
        }else{
          this.items.push({
            realId: row._id,
            id:row.ALIAS,
            color: 'red',
            lastup: ''
          })
        }

          Leaflet.marker([row.LATITUDE, row.LONGITUDE], {icon: greenIcon, draggable: false}).bindPopup("<ul><li><strong>ID:</strong>"+row._id+"</li><li><strong>AL:</strong>"+row.ALIAS+"</li><li><strong>ST:</strong>"+row.STATUS+"</li></ul>").addTo(event);
      })
    })
    this.startSocket()
  }
  map_ready(event: Leaflet.Map): void {
    this.getDevices(event);


  }

  startSocket() {
    setTimeout(() => {
      this.socketDevice.getFromMultiple(this.deviceId.toString()).subscribe(data => {
        try {
          this.changeItem(JSON.parse(data))
        } catch (e) {

        }
      })
    },2000)

  }

  changeItem(data: any) {
    let id = this.items.findIndex(x =>  {return x.realId === data._id})
    this.items[id].id = data.ALIAS;
    this.items[id].realId = data._id;
    this.items[id].lastup = data.LAST_UPDATE;
    if (data.STATUS) {
      this.items[id].color = 'green';
    } else {
      this.items[id].color = 'red';
    }
  }
  ngOnInit(): void {
  }

}
