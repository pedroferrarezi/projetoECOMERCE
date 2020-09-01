import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacompraPage } from './listacompra.page';

const routes: Routes = [
  {
    path: '',
    component: ListacompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacompraPageRoutingModule {}
