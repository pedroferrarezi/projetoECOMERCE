import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojaPage } from './loja.page';

const routes: Routes = [
  {
    path: '',
    component: LojaPage
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'listacompra',
    loadChildren: () => import('./listacompra/listacompra.module').then( m => m.ListacompraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojaPageRoutingModule {}
