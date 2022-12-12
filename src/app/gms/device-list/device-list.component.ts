import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {


  constructor() { 

  }
  devices: { id: string, status: string, url: string }[] = [
    { id: 'CMM-14', status: 'activo', url: 'green' },
    { id: 'CMM-15', status: 'activo', url: 'google.com' },
    { id: 'CMM-16', status: 'inactivo', url: 'google.com' },
    { id: 'CMM-17', status: 'inactivo', url: 'google.com' },
    { id: 'CMM-18', status: 'activo', url: 'google.com' },
  ];

  ngOnInit(): void {
  }

}
