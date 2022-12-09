import { Component, Injectable, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
@Injectable()
export class SidebarComponent implements OnInit {
  items:any;
  constructor() { 
   
  
  }

  
  ngOnInit(): void {
  }

}
