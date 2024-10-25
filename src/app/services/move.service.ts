import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoveListResponse } from '../models/move-list.interface';
import { MoveDetailResponse } from '../models/move-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  constructor(private http: HttpClient) {}

  getMoveList(): Observable<MoveListResponse> {
    return this.http.get<MoveListResponse>('https://pokeapi.co/api/v2/move/');
  }

  getOneMove(id: number): Observable<MoveDetailResponse> {
    return this.http.get<MoveDetailResponse>(
      `https://pokeapi.co/api/v2/move/${id}/`
    );
  }
}
