import { Injectable } from '@angular/core';
import {PLAYER} from '../playerModule';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersEndpoint = 'http://localhost:3000/api';
  getPlayers(): Observable<PLAYER[]> {
    return this.httpClient.get<PLAYER[]>(this.playersEndpoint);
  }

  addPlayer(newPlayer: PLAYER): any {

    return this.httpClient.post<any>(this.playersEndpoint, newPlayer);

  }

  constructor(private httpClient: HttpClient) { }
}
