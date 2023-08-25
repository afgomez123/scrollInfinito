import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
  @Output() scrolled = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = this.el.nativeElement;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementHeight = element.offsetHeight;
    const elementOffsetTop = element.offsetTop;

    if (scrollTop + windowHeight >= elementOffsetTop + elementHeight - 100) {
      this.scrolled.emit();
    }
  }
}
