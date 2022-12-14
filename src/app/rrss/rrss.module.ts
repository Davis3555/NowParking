import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RRSSPageRoutingModule } from './rrss-routing.module';

import { RRSSPage } from './rrss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RRSSPageRoutingModule
  ],
  declarations: [RRSSPage]
})
export class RRSSPageModule {}
