import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThbsBackground]'
})
export class ThbsBackgroundDirective {
  constructor(private myelem : ElementRef) { 
  this.myelem.nativeElement.style.backgroundColor = "yellow";
  // this.myelem.nativeElement.innerHTML = "Hello";
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.myelem.nativeElement.style.fontSize = '30px';
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.myelem.nativeElement.style.fontSize = '15px';
  }

  @HostListener('dblclick')
  onMouseDoubleClick(){
    this.myelem.nativeElement.style.color = 'red';
  }
  @HostListener('click')
  onMouseClick(){
    this.myelem.nativeElement.style.color = 'black';
  }
}
