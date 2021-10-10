import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, BehaviorSubject, Subscription } from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  //tictok = of([1, 2, 3, 4, 5]);
  video = 1;
  tictok = new BehaviorSubject(this.video);
  personaASub: Subscription;
  @ViewChild('mydiv1') mydiv: ElementRef;
  @ViewChild('myinput1') input: ElementRef;
  //Se utiliza para controlar las variables que llegan como referencialocal #nombrevariable en el html

  constructor() {
    //Persona A
    this.personaASub = this.tictok
      .pipe(
        filter((s) => s % 2 === 0)
        /*map((s) => s.join('-')),*/
        //map((s) => s + 'hola')
      )
      .subscribe((v) => {
        console.log('VIDEO A', v);
      });

    //Persona B
    this.tictok.pipe(delay(4000)).subscribe((v) => {
      console.log('VIDEO B', v);
    });

    //Persona C
    this.tictok.subscribe((v) => {
      console.log('VIDEO C', v);
    });
  }

  ngOnInit() {}

  addVideo() {
    this.video++;
    this.tictok.next(this.video);
  }

  eliminarsub() {
    this.personaASub.unsubscribe();
  }

  onShowLocalVars() {
    console.log(this.mydiv);
    this.input.nativeElement.value = 'Ernesto';
    console.log(this.input);
  }
}
