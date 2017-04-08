import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-imgsw',
  templateUrl: 'app/imageswitcher.component.html',
  styleUrls: ['app/imageswitcher.component.css']
})
export class ImageswitcherComponent {
  @Input() listImage;

  listImages = [
    {
      src: "\media\angularjs.png",
      isVisible: null
    },
    {
      src: "\media\html.png",
      isVisible: null
    },
    {
      src: "\media\css.png",
      isVisible: null
    },
    {
      src: "\media\js.png",
      isVisible: null
    },
  ];
}