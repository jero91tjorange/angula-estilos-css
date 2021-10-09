import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDirective1]',
})
export class Directive1Directive {
  @Input() color: string = 'brown';
  @Output() output = new EventEmitter<any>();
  //Escuchar cualquier cambio anivel de dom
  @HostListener('click') onClick() {
    //se puede colocar(window:click) y escucharia en toda la ventana
    this.element.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseleave') onLeave() {
    //se puede colocar(window:click) y escucharia en toda la ventana
    this.element.nativeElement.style.background = 'cyan';
    this.output.emit('Pueba de output');
    //this.setbg(this.color);
  }

  @HostListener('mouseenter') Enter() {
    //se puede colocar(window:click) y escucharia en toda la ventana
    this.element.nativeElement.style.background = 'pink';
  }

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.background = this.color;
    this.element.nativeElement.style.border = '5px solid green';
  }

  setbg(color: string) {
    this.element.nativeElement.style.background = color;
  }

  test(event: any) {
    console.log('Emitiendo el evento.......', event);
  }
}
