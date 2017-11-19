import { Component, OnInit } from '@angular/core';
import { Album } from './musicinterfaces';

@Component({
  selector: 'albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums: Album[] = [
    {
      id: "123",
      name: "test",
      artists: [],
      images: [
        { 
          url: "http://via.placeholder.com/250x250/000/fff", 
          width: 250, 
          height: 250 
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
