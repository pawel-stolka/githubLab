import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output('selectedChange')
  selectedChange = new EventEmitter<Playlist>()

  select(playlist: Playlist){
    this.selected = playlist;
    this.selectedChange.emit(playlist)

    // (selectedChange)="xxx"
    // this.selectedChange.subscribe($event => xxx)
  }

  constructor() { }

  ngOnInit() {
  }

}
