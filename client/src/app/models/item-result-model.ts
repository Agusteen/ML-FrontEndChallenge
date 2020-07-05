import { Author } from "./author-model";
import { ItemModel } from "./item-model";

export interface ItemResultModel {
  author: Author;
  categories: string[];
  items: ItemModel[];
}