import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mwImage]'
})
export class ImageDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}