import { Component, OnInit } from '@angular/core';
import { Item } from './Item';
import { DiexerciseService } from './diexercise.service';

@Component({
  selector: 'exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  items:Item[]

  selected:Item

  select(e) {
    
    this.selected = e;
    console.log(this.selected)
  }
  
  constructor(private service: DiexerciseService) { }

  ngOnInit() {
    this.items = this.service.getItems();
    
    // [
    //   {id: 1, name: "first", number:34, sth: "empty"},
    //   {id: 2, name: "second", number:23, sth: "mickey"}
    // ]
  }

}
