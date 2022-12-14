import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';//importacion de libreria para el uso de geolocalizacion

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  routerOutlet: any;

  constructor(public geolocation: Geolocation, private router:Router, private ActivatedRouter: ActivatedRoute) { //se determina el constructor con variable public
  
  }
  goBack() { this.routerOutlet.pop(); }
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
