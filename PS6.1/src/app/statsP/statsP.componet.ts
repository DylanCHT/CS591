import { Component, OnInit, Input } from '@angular/core';

import {PLAYER} from '../playerModule';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-playerStats',
  templateUrl: './statsP.component.html'
})
export class PlayerStatsComponent implements OnInit {

  @Input() selectedPlayer: PLAYER;

  constructor() { }

  ngOnInit() {
  }

}
