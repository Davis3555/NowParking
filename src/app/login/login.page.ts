import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';// se importa la libreriaRouter, NavigationExtras desde angular 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //se crea una cadena "user" con dos variables "usuario" y "password"
  user={
    usuario:"",
    password:"",
    correo:"",
    telefono:""
  }
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('loginPage ngOnInit');     
  }

  ingresar(){
    // Se declara una variable y se instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/home'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
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



