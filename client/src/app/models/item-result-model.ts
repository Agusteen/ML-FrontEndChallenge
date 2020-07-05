import { Author } from "./author-model";
import { ItemModel } from "./item-model";

export interface ResultModel {
  author: Author;
  categories: string[];
  items: ItemModel[];
}