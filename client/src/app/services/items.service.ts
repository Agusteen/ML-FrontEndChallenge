import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  _baseUrlApiItems: string;

  constructor(private http: HttpClient) {
    this._baseUrlApiItems = environment.BASEURL_API_ITEMS;
  }

  getItemsByFilter(query: string): Observable<any> {
    console.log('service', `${this._baseUrlApiItems}/q=${query}`);
    
    return this.http.get(`${this._baseUrlApiItems}?q=${query}`);
  }
}
