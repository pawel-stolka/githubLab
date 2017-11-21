import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { Album } from './musicinterfaces';

@Component({
  selector: 'music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[] = [];

  constructor(private service: MusicService) { }

  ngOnInit() {
    this.albums = this.service.getAlbums()
  }

}
