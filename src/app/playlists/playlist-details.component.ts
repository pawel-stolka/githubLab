import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

  // playlist: Playlist = {
  //   id: 1,
  //   name: "Learning after Mateusz Workshops",
  //   fcolor: '#121212',
  //   color: '#dd0000'
  // }
  @Input()
  playlist: Playlist

  mode = 'show'

  save(e){
    console.log('saved!', e)
    this.mode = 'show'
  }
  edit(e){
    this.mode = 'edit'
  }
  cancel(e){
    this.mode = 'show'
  }

  constructor() { }

  ngOnInit() {
  }

}
