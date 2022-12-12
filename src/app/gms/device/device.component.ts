import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DeviceService} from "../../service/device.service";
import {Device} from "../../model/device";
import {SocketDeviceService} from "../../service/socketDevice";
import {forEach} from "@angular-devkit/schematics";


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  deviceID: string = "";
  Device?: Device
  color: string = '';
  constructor(private actRoute: ActivatedRoute, private deviceService : DeviceService, private socketService: SocketDeviceService) {
    this.deviceID = this.actRoute.snapshot.params['id'];
    this.getData()
  }

  getData () {
    this.deviceService.getDevice(this.deviceID).subscribe((data) => {
      this.Device = data!;
    })
  }

  getPercent(value: number, max: number) {
    let calc = (value*100) / max;
    if (calc > max) {
      console.log(calc+' '+ max);
      this.color = 'danger'
    }else if( calc < max-20){
      this.color = 'primary'
    } else {
      this.color = 'warning'
    }
    return calc;
  }

  ngOnInit(): void {
    this.socketService.getNewMessage().subscribe(row => {
      try {
        this.Device = JSON.parse(row)
      } catch (e) {
        console.log(e);
      }

    })
  }

  controllerRunningStatus(status: number) {
    switch (status) {
      case 0:
        return '<span class="badge bg-info">StandBy</span>'
      case 1:
        return '<span class="badge bg-warning">Pre Heating</span>'
      case 2:
        return '<span class="badge bg-warning">Fuel Output</span>'
      case 3:
        return '<span class="badge bg-warning">Crank</span>'
      case 4:
        return '<span class="badge bg-warning">Crank Rest</span>'
      case 5:
        return '<span class="badge bg-warning">Safety Delay</span>'
      case 6:
        return '<span class="badge bg-success">Start Idle</span>'
      case 7:
        return '<span class="badge bg-success">High Speed Warming Up</span>'
      case 8:
        return '<span class="badge bg-success">Wait For Load</span>'
      case 9:
        return '<span class="badge bg-success">Normal Running</span>'
      default:
        return ''
    }
  }
  ATS(status: number) {
    switch (status) {
      case 0:
        return '<span class="badge bg-info">Iniciar</span>'
      case 1:
        return '<span class="badge bg-warning">Parar</span>'
      case 2:
        return '<span class="badge bg-warning">Sin Retraso</span>'
      default:
        return ''
    }
  }
  PRIN(status: number) {
    switch (status) {
      case 0:
        return '<span class="badge bg-info">Iniciar</span>'
      case 1:
        return '<span class="badge bg-warning">Parar</span>'
      case 2:
        return '<span class="badge bg-warning">Sin Retraso</span>'
      default:
        return ''
    }
  }



}
