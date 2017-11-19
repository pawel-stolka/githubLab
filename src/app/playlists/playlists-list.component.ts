import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.css']
})
export class PlaylistsListComponent implements OnInit {

  selected: Playlist;

  playlists:Playlist[] = [
    { id:1, name:"*ngIf",color: '#dd0000', fcolor: '#fff'},
    { id:2, name:"*ngFor",color: '#cc0000', fcolor: '#aaaa00'},
    { id:3, name:"Input()",color: '#000000', fcolor: '#fff'},
    { id:4, name:"Output()",color: '#000000', fcolor: '#fff'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
