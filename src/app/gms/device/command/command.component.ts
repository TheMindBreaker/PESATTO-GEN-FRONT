import { Device } from './../../../model/device';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  @Input() command : any;
  @Input() Device? : Device;



  constructor() { }

  ngOnInit(): void {

  }

}
