import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `
    <div id="container">
      <p class="hola">admin2 works fine <strong>{{test1??test2}}</strong></p>
      
      <button (click)="testParams()">test</button>
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

  strong{
    color:red;
  }
  `,
  ],
})
export class Admin2Component implements OnInit {
  test1 = null;
  test2 = 'kristy';
  constructor() {}
  ngOnInit() {}

  public testParams(name: string, lastname?: string = 'kerberos') {
    //? se utiliza para marcarlo como parametro opcional y se le puede asignar un valor por defecto.
    const aux = 'jose'; // ?? Se utilizan para sustituir un valor por otro del lado derecho como se ve en el ejemplo acontinuacion
    console.log('Nombre: ', name ?? aux + ' Apellido: ' + lastname);
    return name + ' ' + lastname;
  }
}
