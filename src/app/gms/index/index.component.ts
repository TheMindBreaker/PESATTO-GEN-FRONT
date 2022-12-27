import { UsersService } from './../../service/users.service';
import { DeviceBasic } from './../../model/device_basic';
import { DeviceService } from './../../service/device.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Device } from 'src/app/model/device';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  devices: Array<Device> = []
  linearMode = true;
  firstForm!: FormGroup;
  secondForm!: FormGroup;
  inputs: any = {}
  mode:any


  constructor(private service: UsersService, private formBuild : FormBuilder, private serviceDevice: DeviceService) { }

  ngOnInit(): void {
    this.service.getDevices().subscribe(res => {
      this.devices = res
      
    })
    this.forms()
  }

  forms(){
    this.firstForm = this.formBuild.group({
      alias: ['', [Validators.required, Validators.minLength(2)]],
      port: ['', [Validators.required, Validators.minLength(1)]],

      
    })
    this.secondForm = this.formBuild.group({
      type: [{value:'HGM6120', disabled:false},[Validators.required]],
      identifier: [{value:'', disabled:false},[Validators.required]]

      
    })
  }

  onSubmit(){

    this.inputs = {
      alias: this.firstForm.controls['alias'].value,
      type: this.secondForm.controls['type'].value,
      port: this.firstForm.controls['port'].value
    }
    console.log(this.inputs)
    this.serviceDevice.createDevice(this.inputs).subscribe(res => {
      console.log(res)

    })

    
  }



}
