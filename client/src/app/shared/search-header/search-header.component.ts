import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent {

  constructor(private _itemService: ItemsService) { }

  search(form: NgForm): void {
    if(!form.valid) return;
    var query: string = form.value.query;     
    this._itemService.getItemsByFilter(query).subscribe((items) => {
      console.log(items);      
    })
  }

}
