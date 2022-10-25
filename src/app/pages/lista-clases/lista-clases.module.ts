import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaClasesPageRoutingModule } from './lista-clases-routing.module';

import { ListaClasesPage } from './lista-clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaClasesPageRoutingModule
  ],
  declarations: [ListaClasesPage]
})
export class ListaClasesPageModule {}
