import { Component, OnInit } from '@angular/core';

import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';//importacion de libreria para el uso de geolocalizacion

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(public geolocation: Geolocation) { //se determina el constructor con variable public
  
  }
  
  ngAfterViewInit() {

    this.geolocationNative()
  }
  
  geolocationNative(){
    
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) => {

      console.log(geposition);
    })
  }
  
  
  ngOnInit() {
  }

}
