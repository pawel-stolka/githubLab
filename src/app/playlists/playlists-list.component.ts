import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.css']
})
export class PlaylistsListComponent implements OnInit {

  selected: Playlist;

  @Input('playlists')
  playlists: Playlist[] = [];

  constructor() { }

  ngOnInit() {
  }

}
