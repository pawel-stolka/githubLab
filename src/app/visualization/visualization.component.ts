import { Component, OnInit } from '@angular/core';
import { Fav } from '../Fav';

@Component({
  selector: 'visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  favs: Fav[] = [];

  addFav(fav:Fav) {
    this.favs.push(fav);
  }

  constructor() { }

  ngOnInit() {
    // let _fav: Fav = {
    //   id: 10,
    //   login: 'ratatam'
    // }
    // this.addFav(_fav)
    // this.addFav(_fav)
    // this.addFav(_fav)
    // this.addFav(_fav)
    // this.addFav(_fav)
    // this.addFav(_fav)
    // this.addFav(_fav)
    // this.addFav(_fav)
  }

}
