import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
  @Input() mediaItem;
  @Output() hide = new EventEmitter();

  close() {
    this.hide.emit();
  }

  listImages = [
    {
      src: "/media/angularjs.png",
      isVisible: true
    },
    {
      src: "/media/html.png",
      isVisible: false
    },
    {
      src: "/media/css.png",
      isVisible: false
    },
    {
      src: "/media/js.png",
      isVisible: false
    },
  ];
  idx = 0;
  setVisible(x) {
    for (var image of this.listImages) {
      image.isVisible = false;
    }
    this.listImages[x].isVisible = true;
  }
  nextImg() {
    this.idx += 1;
    if (this.idx > 3) {
      this.idx = 0;
    }
    this.setVisible(this.idx);
  }
  prevImg() {
    this.idx -= 1;
    if (this.idx < 0) {
      this.idx = 3;
    }
    this.setVisible(this.idx);
  }
}