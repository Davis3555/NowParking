import { Component, ViewChild } from '@angular/core';
//importamos la libreria activatedRouter y Router desde angular
import { ActivatedRoute, Router } from '@angular/router';
import { createAnimation } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //se crea una variable del tipo any que permite ingresarle cualquier valor
  data: any;
  
  //en el constructor ingresamos ciertos parametros (se configura) 
  //private = visibilidad de los datos
  // activeRoute = identificador 
  //ActiveRoute = Tipo de Objeto (tipo de dato)
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    //aqui en la ruta activa se reciben los parametros 
    this.activeroute.queryParams.subscribe(params => {
      //se verifica que en la navegacion contenga datos extra
      if (this.router.getCurrentNavigation().extras.state) {
        // Si tiene datos extra los captura
        this.data = this.router.getCurrentNavigation().extras.state.user;
        //aqui se envian a la consola los datos recibidos
        console.log(this.data)
        //aqui se hace una condicion de que si no trae datos extras se redirecciona al login
      }else{this.router.navigate(["/login"])} 
  });
}



    
  ngOnInit() {
    console.log('loginPage ngOnInit');
    const animation = createAnimation()
   .addElement(document.querySelector('.square'))
   .duration(1500)
   .iterations(Infinity)
   .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
   .fromTo('opacity', '1', '0.2');

document.querySelector('#play').addEventListener('click', () => {
  animation.play();
});

document.querySelector('#pause').addEventListener('click', () => {
  animation.pause();
});

document.querySelector('#stop').addEventListener('click', () => {
  animation.stop();
});
    
  }
  //script para destruccion de procesos de los page's  
  ngOnDestroy() {
    console.log('loginPage ngOnDestroy');
  }

  ionViewWillEnter(){
    console.log('loginPage ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('loginPage ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('loginPage ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('loginPage ionViewDidLeave');
  }
}





