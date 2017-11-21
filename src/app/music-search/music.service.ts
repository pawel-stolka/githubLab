import { Injectable } from '@angular/core';
import { Album } from './musicinterfaces';

@Injectable()
export class MusicService {

  constructor() { }

  getAlbums() {
    return this.albums
  }

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
}
