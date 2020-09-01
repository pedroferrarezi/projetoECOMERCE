import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacompraPageRoutingModule } from './listacompra-routing.module';

import { ListacompraPage } from './listacompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacompraPageRoutingModule
  ],
  declarations: [ListacompraPage]
})
export class ListacompraPageModule {}
