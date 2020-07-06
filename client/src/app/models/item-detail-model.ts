import { Author } from "./author-model";
import { ItemModel } from "./item-model";

export interface ItemDetailModel {
  author: Author;
  item: ItemModel;
}