import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { ItemModel } from 'src/app/models/item-model';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  itemDetail: ItemModel;
  categoriesList: string[];
  loading: boolean = true;

  constructor(private routeParams: ActivatedRoute, private _itemService: ItemsService, private titleService: Title) { }

  ngOnInit(): void {
    registerLocaleData(es);
    var itemId: string = this.routeParams.snapshot.params.id;
    this.categoriesList = this._itemService.categoriesList;
    
    this._itemService.getItemById(itemId).subscribe(res => {
      this.itemDetail = res.item;      
      if(this.itemDetail.title) this.titleService.setTitle(this.itemDetail.title);  
      this.loading = false;
    });
  }
}
