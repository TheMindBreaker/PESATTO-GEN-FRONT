import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
  }

  openWindow() {
    this.windowService.open(UserComponent, { title: `Window` });
  }

}
