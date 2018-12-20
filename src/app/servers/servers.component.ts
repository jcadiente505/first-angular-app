import { Component, OnInit } from '@angular/core';

@Component({
  // this selector makes the component an HTML Tag like so <app-servers></app-servers>
  selector: 'app-servers',
  // this selector makes the component an HTML Attribute like so <div app-servers></div>
  // selector: '[app-servers]',
  // this selector makes this a HTML class like so <div class="app-servers"></div> **SELECTING BY ID DOES NOT WORK**
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus = "No server was created!"

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
    
  }
}
