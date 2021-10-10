import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Mis directivas
import { Directiva2Directive } from './directiva2.directive';
import { Directive1Directive } from './directive1.directive';
//mis modulos
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';
//componentes propios
import { RxjsComponent } from './rxjs/rxjs.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    RxjsComponent,
    Directive1Directive,
    Directiva2Directive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
