import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-imgsw',
  templateUrl: 'app/imageswitcher.component.html',
  styleUrls: ['app/imageswitcher.component.css']
})
export class ImageswitcherComponent {
@Input() listImage;


}