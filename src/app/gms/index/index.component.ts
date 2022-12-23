import { UsersService } from './../../service/users.service';
import { DeviceBasic } from './../../model/device_basic';
import { DeviceService } from './../../service/device.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  devices: Array<DeviceBasic> = []
  linearMode = true;
  firstForm!: FormGroup;
  secondForm!: FormGroup;
  inputs: any = {}


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
      
    })
    this.secondForm = this.formBuild.group({
      password: ['', [Validators.required]]
      
    })
  }

  onSubmit(){

    this.inputs = {
      alias: this.firstForm.controls['alias'].value,
      password: this.secondForm.controls['password'].value
    }

    this.serviceDevice.createDevice(this.inputs).subscribe(res => {
      console.log(res)

    })

    
  }



}
