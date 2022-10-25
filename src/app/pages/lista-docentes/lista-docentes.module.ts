import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDocentesPageRoutingModule } from './lista-docentes-routing.module';

import { ListaDocentesPage } from './lista-docentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDocentesPageRoutingModule
  ],
  declarations: [ListaDocentesPage]
})
export class ListaDocentesPageModule {}
