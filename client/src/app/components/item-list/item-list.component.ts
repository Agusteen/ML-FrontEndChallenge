import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemsService } from 'src/app/services/items.service';

import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  query:string;
  itemList: ItemModel[];

  constructor(private route: ActivatedRoute, private _itemService: ItemsService) {
    this.route.queryParams.subscribe(params => {
      this.query = params['search'];      
      console.log(this.query);
      this.itemList = [];
      
      this.searchByFilter();
    });
   }

  ngOnInit(): void {
    
  }

  searchByFilter(): void {
    console.log('GET', this.query);
    this._itemService.getItemsByFilter(this.query).subscribe((res) => {
      this.itemList = res.items;      
      console.log( this.itemList);
      
    });
  }

}
