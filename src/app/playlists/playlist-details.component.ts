import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

  playlist: Playlist = {
    id: 1,
    name: "Learning after Mateusz Workshops",
    fcolor: '#fff',
    color: '#123456'
  }

  constructor() { }

  ngOnInit() {
  }

}
