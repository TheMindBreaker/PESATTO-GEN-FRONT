import { UsersService } from 'src/app/service/users.service';
import { DeviceBasic } from './../../model/device_basic';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  values: string = '';
  user!: FormGroup;
  listDevice!: any;
  idUser? : string;

  constructor(private formb: FormBuilder, private service: UsersService, private toastrService: NbToastrService, private active: ActivatedRoute) {
    this.idUser = this.active.snapshot.params['id'];

   }

  onSubmit(form: any) {

    this.service.insertNewUser(form).subscribe(res => {
      if (res) {
        this.toastrService.success("Usuario agregado");
      } else {
        this.toastrService.danger("Ah ocurrido un error");
      }
    })

  }

  getListDevice(){
    this.service.getDevices().subscribe(res => {
      this.listDevice = res
    })
  }

  getOneUser(id:string){
    this.service.findOneUser(id).subscribe(res => {
      console.log(res)
    })

  }

  ngOnInit(): void {

    this.user = this.formb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]],
      device: ['', [Validators.required, Validators.minLength(2)]],
      role: ['', [Validators.required, Validators.minLength(2)]],
    })
      this.getListDevice()
    if (this.idUser) {
      this.getOneUser(this.idUser);
    }
  }

}
