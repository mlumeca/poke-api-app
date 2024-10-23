import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BerryListResponse } from '../models/berry-list.interface';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  constructor(private http: HttpClient) {}

  getBeeryList(): Observable<BerryListResponse> {
    return this.http.get<BerryListResponse>('https://pokeapi.co/api/v2/berry/');
  }
}
