import { Component, OnInit, Input } from '@angular/core';
import { Album, AlbumImage } from './musicinterfaces';

@Component({
  selector: 'album-item, [album-item]',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  

  @Input('album-item')
  set onAlbum(album) {
    this.album = album
    this.image = album.images[0]
  }
  image: AlbumImage

  album: Album
  
  constructor() { }

  ngOnInit() {
  }

}
