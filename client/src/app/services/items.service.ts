import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ItemResultModel } from 'src/app/models/item-result-model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  _baseUrlApiItems: string;

  constructor(private http: HttpClient) {
    this._baseUrlApiItems = environment.BASEURL_API_ITEMS;
  }

  getItemsByFilter(query: string): Observable<ItemResultModel> {
    console.log('SERVICE', query);
        
    return this.http.get<ItemResultModel>(`${this._baseUrlApiItems}?q=${query}`);
  }
}
