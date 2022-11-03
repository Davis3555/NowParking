import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';//importacion de libreria para el uso de geolocalizacion

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],//se implementa la variable Geolocation
  bootstrap: [AppComponent],
})
export class AppModule {}


