import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.page.html',
  styleUrls: ['./registo.page.scss'],
})
export class RegistoPage implements OnInit {

  constructor() { }


  ngOnInit() {
    console.log('loginPage ngOnInit');     
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
