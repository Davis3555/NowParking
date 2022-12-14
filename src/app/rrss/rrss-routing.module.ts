import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RRSSPage } from './rrss.page';

const routes: Routes = [
  {
    path: '',
    component: RRSSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RRSSPageRoutingModule {}
