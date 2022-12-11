import { Component, OnInit } from '@angular/core';
import {NbPosition} from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {


  position = NbPosition.BOTTOM
  constructor() {
  }

  ngOnInit() {

  }



}
