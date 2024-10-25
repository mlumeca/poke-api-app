import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BerryListResponse } from '../models/berry-list.interface';
import { BerryDetailResponse } from '../models/berry-detail-interface';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  constructor(private http: HttpClient) {}

  getBeeryList(): Observable<BerryListResponse> {
    return this.http.get<BerryListResponse>('https://pokeapi.co/api/v2/berry/');
  }

  getOneBerry(id: number): Observable<BerryDetailResponse> {
    return this.http.get<BerryDetailResponse>(
      `https://pokeapi.co/api/v2/berry/${id}/`
    );
  }
} 
