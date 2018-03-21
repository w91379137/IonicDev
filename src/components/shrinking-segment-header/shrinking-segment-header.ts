import { Component, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the ShrinkingSegmentHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shrinking-segment-header',
  templateUrl: 'shrinking-segment-header.html'
})
export class ShrinkingSegmentHeaderComponent {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;

  newHeaderHeight: any;

  //Renderer 等於 html document 操做 原生元件
  constructor(public element: ElementRef, public renderer: Renderer) {}

  ngAfterViewInit() {

    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    this.scrollArea.ionScroll.subscribe((event) => {
      this.resizeHeader(event);
    });

    this.scrollArea.ionScrollStart.subscribe((event) => {
      console.log('start');
console.log(event);
    });

    this.scrollArea.ionScrollEnd.subscribe((event) => {
      console.log('end');
      console.log(event);
    });
  }

  resizeHeader(event) {

    event.domWrite(() => {

      this.newHeaderHeight = this.headerHeight - event.scrollTop;
      this.newHeaderHeight = Math.max(0, this.newHeaderHeight);
      this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
      
    });

  }

}
