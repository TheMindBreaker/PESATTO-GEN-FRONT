import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { UsersService } from 'src/app/service/users.service';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usuario?: Array<User>;
  idUser?: string; 

  constructor(private windowService: NbWindowService, private service: UsersService) { 
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getUsers().subscribe((res) => {
      this.usuario = res;
    })
  }

  openWindow() {
    this.windowService.open(UserComponent, { title: `Agregar usuario`, closeOnEsc: false });
  }

}
