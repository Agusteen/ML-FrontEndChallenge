import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

import { ItemsService } from 'src/app/services/items.service';

import { ItemModel } from 'src/app/models/item-model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  query:string;
  itemList: ItemModel[];
  categoriesList: string[];

  loading: boolean = true;

  constructor(private route: ActivatedRoute, private _itemService: ItemsService, private titleService: Title) {
    this.route.queryParams.subscribe(params => {
      this.query = params['search'];    
      this.itemList = [];
      this.categoriesList = [];
      
      this.searchByFilter();
    });
   }

  ngOnInit(): void {
    registerLocaleData(es);
  }

  searchByFilter(): void {
    this._itemService.getItemsByFilter(this.query).subscribe((res) => {
      this.itemList = res.items;      
      this._itemService.categoriesList = res.categories;  
      this.categoriesList = this._itemService.categoriesList;
      var title = this.categoriesList ? this.categoriesList[this.categoriesList.length - 1] : 'Nunca dejes de buscar';
      this.titleService.setTitle(title); 
      this.loading = false;
    });
  }

}
