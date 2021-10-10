import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnChanges,
  NgModule,
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Directive({
  selector: '[myplantilla]',
})
export class Directiva2Directive implements OnChanges {
  @Input() myplantilla: boolean = true;
  constructor(
    private templateref: TemplateRef<any>,
    private viewcontainerref: ViewContainerRef //End constructor
  ) {
    if (this.myplantilla) {
      this.viewcontainerref.createEmbeddedView(this.templateref);
    } else {
      this.viewcontainerref.clear();
    }
  }
  ngOnChanges(changes: any) {
    console.log('Cambios', changes.myplantilla.currentValue);
  }
}
