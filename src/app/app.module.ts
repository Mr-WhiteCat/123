import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC02Component } from './myc02.component';
import { MyC03Component } from './myc03/myc03.component';
import { MyComponent01 } from './mycom01';
import { Myc04Component } from './myc04/myc04.component';
import { MyC05Component } from './my-c05/my-c05.component';
import { Myc05Component } from './myc05/myc05.component';

@NgModule({
  declarations: [ //宣言/申明/宣称
    AppComponent,
    MyComponent01,
    MyC02Component,
    MyC03Component,
    Myc04Component,
    MyC05Component,
    Myc05Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
