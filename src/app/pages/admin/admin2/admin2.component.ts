import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `
    <div id="container">
      <p class="hola">admin2 works fine ygyuguyg</p>
      
      <button (click)=testParams('Ernesto', 'ramirez')>test</button>
    </div>
 
  `,
  styles: [
    `
  #container{
    background-color:green;
  }
  .hola{
    background-color:yellow;
    color:blue;
  }
  `,
  ],
})
export class Admin2Component implements OnInit {
  constructor() {}
  ngOnInit() {}

  public testParams(name: string, lastname: string) {
    console.log('Nombre: ', name + ' Apellido: ' + lastname);
    return name + ' ' + lastname;
  }
}
