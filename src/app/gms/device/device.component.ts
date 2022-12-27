import { CommandComponent } from './command/command.component';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from "../../service/device.service";
import { Device } from "../../model/device";
import { SocketDeviceService } from "../../service/socketDevice";
import { forEach } from "@angular-devkit/schematics";
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  deviceID: string = "";
  Device?: Device
  module?: string
  commands?: any
  loading = false;
  color: string = '';
  modeOld: any;
  modeNew: any;
  mode: any;
  constructor(private actRoute: ActivatedRoute, private deviceService: DeviceService, private socketService: SocketDeviceService, private toastrService: NbToastrService) {
    this.deviceID = this.actRoute.snapshot.params['id'];
    this.getData()
  }

  getData() {
    this.deviceService.getDevice(this.deviceID).subscribe((data) => {
      this.Device = data!;
      this.modeOld = this.Device.DEVICE_INPUT.MODE
      this.module = this.Device.MODULE_TYPE
      this.getCommands(data.MODULE_TYPE)

    })
  }

  getCommands(m: string) {
    this.deviceService.getCommands(m).subscribe(res => {
      this.commands = res
    })
  }

  runCommand(commnad: any) {
    /* VERIFICACION DE PASSWORD */
    let password = prompt("Por favor digite la contraseña del dispositivo", "");
    if (password) {
      if (password == this.Device?.PASSWORD.toString()) {
        /* CONDICION COMANDOS DIFERENTES DE MODE_START */
        if (commnad.COMMAND_NAME != 'MODE_START') {
          this.deviceService.sendCommand(commnad, this.Device?._id).subscribe(row => {
            if (row.result) {
              this.toastrService.success("Ejecutando comando");
              this.loading = true;
            } else {
              this.toastrService.danger("Error en la ejecución del comando");
            }
          })
          /* CONDICION PARA COMANDO MODE_START */
        } else {
          if (this.Device?.DEVICE_INPUT.MODE.MANUAL_MODE === true) {
            this.deviceService.sendCommand(commnad, this.Device?._id).subscribe(row => {
              if (row.result) {
                this.toastrService.success("Ejecutando comando");
              } else {
                this.toastrService.danger("Error en la ejecución del comando");
              }
            })
            /* SI NO ESTA EN MODE_MANUAL HAY QUE ACTIVARLO PARA MODE_START */
          } else {
            alert('Para encender, activa primero el MODO MANUAL')
          }
        }
      }else{
        this.toastrService.danger("Constraseña incorrecta");

      }
    }
  }

  modeLoader(modeOld: any, modeNew: any){
    let old = ''
    let modenew = ''
    for(let value in modeOld){
      if (modeOld[value]) {
        old = value
      }
    }
    for(let value in modeNew){
      if (modeNew[value]) {
        modenew = value
      }
    }

    if (modenew != old) {
      this.getData()
      this.loading = false
    }
  }

  getPercent(value: number, max: number) {
    let calc = (value * 100) / max;
    if (calc >= 85) {
      this.color = 'primary'
    } else if (calc > 65 && calc > 84) {
      this.color = 'warning '
    } else {
      this.color = 'danger'
    }
    return calc;
  }

  ngOnInit(): void {
    this.socketService.getNewMessage(this.deviceID).subscribe(row => {
      try {
        this.Device = JSON.parse(row)
        this.modeLoader(this.modeOld, this.Device?.DEVICE_INPUT.MODE)
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
  modeStatus(key: string, val: true) {
    if (key == 'STOP_MODE') {
      return 'badge bg-danger';
    } else if (key == 'MANUAL_MODE') {
      return 'badge bg-primary';
    } else if (key == 'TEST_MODE') {
      return 'badge bg-secondary';
    } else if (key == 'AUTO_MODE') {
      return 'badge bg-success';
    } else {
      return 'badge bg-primary';
    }
  }
  



}
