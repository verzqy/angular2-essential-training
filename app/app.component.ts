import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  item = null;
  
  onMediaItemDelete(mediaItem) {
    
  }
  
  onMediaItemPreview(mediaItem) {
    this.item = mediaItem;

  }

  onPopupHide() {
    this.item = null;
  }

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };
  secondMediaItem = {
    id: 1,
    name: "Avengers",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };
}
