import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirective1]',
})
export class Directive1Directive {
  //@Input() color: string = '';
  //Escuchar cualquier cambio anivel de dom
  @HostListener('click') onClick() {}
  
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.background = this.color;
    this.element.nativeElement.style.border = '5px solid green';
  }
}
