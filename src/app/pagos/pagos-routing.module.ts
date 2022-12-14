import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EfectivoComponent } from '../efectivo/efectivo.component';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

import { PagosPage } from './pagos.page';

const routes: Routes = [
  {
    path: '',
    component: PagosPage,
    children:[
      {
        path:'tarjeta', 
        component: TarjetaComponent
      },
      
      {
        path:'efectivo',
        component: EfectivoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosPageRoutingModule {}
