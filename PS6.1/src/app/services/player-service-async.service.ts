import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PLAYER} from '../playerModule';


@Injectable({
  providedIn: 'root'
})
export class PlayerServiceAsyncService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  contactsEndpoint = 'http://localhost:3000/api/db';

  getPlayers(): Observable<PLAYER[]> {
    return this.httpClient.get<PLAYER[]>(this.contactsEndpoint);
  }
  constructor(private httpClient: HttpClient) { }
}
