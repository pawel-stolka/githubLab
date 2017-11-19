import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { SearchFormComponent } from './search-form.component';
import { AlbumsListComponent } from './albums-list.component';
import { AlbumItemComponent } from './album-item.component';
import { MusicService } from './music.service';

@NgModule({
imports: [CommonModule],
declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    AlbumItemComponent,
    AlbumsListComponent
],
providers: [
    MusicService
],
exports:[MusicSearchComponent]
})

export class MusicSearchModule {}