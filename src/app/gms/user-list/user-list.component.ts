import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { NbWindowService, NbToastrService } from '@nebular/theme';
import { UsersService } from 'src/app/service/users.service';
import { UserComponent } from '../user/user.component';
import { TapObserver } from 'rxjs/internal/operators/tap';


@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usuario?: Array<User>;
  idUser?: any; 

  constructor(private windowService: NbWindowService, private service: UsersService, private toastrService: NbToastrService) { 
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getUsers().subscribe((res) => {
      this.usuario = res;
    })
  }

  deleteUser(id:any){
    this.service.deleteUser(id).subscribe(res => {
      if (res) {
        this.getData()
        this.toastrService.success("Usuario Eliminado");
      } else {
        this.toastrService.danger("Ah ocurrido un error");
      }
    })
  }

  openWindow() {
    this.windowService.open(UserComponent, { title: `Agregar usuario`, closeOnEsc: false });
  }

}
