import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MusicSearchModule } from './music-search/music-search.module';

import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistsListComponent } from './playlists/playlists-list.component';
import { PlaylistItemComponent } from './playlists/playlist-item.component';
import { PlaylistDetailsComponent } from './playlists/playlist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistsListComponent,
    PlaylistItemComponent,
    PlaylistDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MusicSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
