import { UsersService } from 'src/app/service/users.service';
import { DeviceBasic } from './../../model/device_basic';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbTagComponent, NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  values: string = '';
  user!: FormGroup;
  listDevice: any = [];
  idUser? : string;
  tags: Set<string> = new Set<string>();
  edit: boolean = false;
  


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
      this.user.controls['name'].setValue(res.name)
      this.user.controls['email'].setValue(res.email)
      this.user.controls['password'].setValue(res.password)
      this.user.controls['device'].setValue(res.devices)
      this.user.controls['role'].setValue(res.role)


    })

  }
  onTagAdd(item:any){
    /* CONSULTAMOS LOS VALORES DEL INPUT DEVICE */
    let array = this.user.controls['device'].value;
    /* ITERAMOS LOS VALORES DE NUESTRO INPUT DEVICE*/
    for (let index = 0; index < array.length; index++) {
      this.tags.add(array[index])//AGREGAMOS LOS VALORES A LA VARIABLE TAGS
    }
    this.tags.add(item)//SE AGREGA EL NUEVO VALOR QUE ENVIA EL EVENT A TAGS

    /* ITERAMOS LOS VALORES DE TAGS */
    let x: string[] = []
    this.tags.forEach(element => {
      x.push(element) //LOS VALORES SE COLOCAN EN UN ARRAY
    })
    this.user.controls['device'].setValue(x) //ASIGNAMOS LOS NUEVOS VALORES AL INPUT DEVICE

  }

  onTagRemove(tagToRemove: any): void {
    let array = this.user.controls['device'].value;
    let index = array.indexOf(tagToRemove.text)
    array.splice(index, 1);

  }

  onSubmitUpdate(form: any) {
    this.service.updateUser(form, this.idUser!).subscribe(res => {
      if (res) {
        this.toastrService.success("Usuario actualizado");
      } else {
        this.toastrService.danger("Ah ocurrido un error");
      }
    })
  }

  
  ngOnInit(): void {

    this.user = this.formb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      device: [[], [Validators.required, Validators.minLength(1)]],
      role: ['', [Validators.required, Validators.minLength(1)]],
    })
      this.getListDevice()
    if (this.idUser) {
      this.getOneUser(this.idUser);
    }
  }

}
