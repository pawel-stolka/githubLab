import { Injectable } from '@angular/core';
import { Item } from './Item';

@Injectable()
export class DiexerciseService {
  
  items: Item[] = [
    {id: 1, name: "first", number:34, sth: "empty"},
    {id: 2, name: "second", number:23, sth: "mickey"},
    {id: 3, name: "third", number:33, sth: "magic"}
  ]

  constructor() { }

  getItems() {
    return this.items
  }

}
