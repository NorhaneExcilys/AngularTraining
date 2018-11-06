import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  @HostBinding('class.isActive') isActive = false;
  @HostBinding('class') class = 'red-square';

  constructor(private el: ElementRef,  private renderer: Renderer) { }

  @HostListener('click', ['$event'])
  onclick() {
    this.isActive = ! this.isActive;

  }

  highlight(color) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
