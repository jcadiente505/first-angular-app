import { Component } from '@angular/core';

// adding a decorator is a way to enhance Angular classes
@Component({
    // must configure the decorator which is stored as meta data for this class
    // the selector is basically the HTML tag by which you use this component later
    // should be a unique string, **DO NOT OVERRIDE AN EXISTING HTML ELEMENT**
    selector: 'app-server',
    // templateUrl is the html file associated with this component
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    // Practicing method in components

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}