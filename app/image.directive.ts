import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[mwImage]'
})
export class ImageDirective {
  @HostBinding('class.hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
}