import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  itemDetail: ItemModel;
  categoriesList: string[];

  constructor(private routeParams: ActivatedRoute, private _itemService: ItemsService) {      
  }

  ngOnInit(): void {
    var itemId: string = this.routeParams.snapshot.params.id;
    this.categoriesList = this._itemService.categoriesList;
    
    this._itemService.getItemById(itemId).subscribe((res) => {
      this.itemDetail = res.item;      
    });
  }

}
