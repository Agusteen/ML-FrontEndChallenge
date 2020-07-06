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
  categoriesList: string[];

  constructor(private route: ActivatedRoute, private _itemService: ItemsService) {
    this.route.queryParams.subscribe(params => {
      this.query = params['search'];    
      this.itemList = [];
      this.categoriesList = [];
      
      this.searchByFilter();
    });
   }

  ngOnInit(): void {
    
  }

  searchByFilter(): void {
    this._itemService.getItemsByFilter(this.query).subscribe((res) => {
      this.itemList = res.items;      
      this._itemService.categoriesList = res.categories;  
      this.categoriesList = this._itemService.categoriesList;
    });
  }

}
