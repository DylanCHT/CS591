import { Component } from '@angular/core';
import {first5} from './Pmock';
import {Pinfo} from './Pinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Golden State Warriors';
  players = first5;
  private ff: Pinfo;


  selectPlayer(player: Pinfo) {
    this.ff = player;

  }
}
