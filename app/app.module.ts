import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { PopupComponent } from './popup.component';
import { ImageswitcherComponent } from './imageswitcher.component';
import { ImageDirective } from './image.directive';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    PopupComponent,
    ImageswitcherComponent,
    ImageDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}