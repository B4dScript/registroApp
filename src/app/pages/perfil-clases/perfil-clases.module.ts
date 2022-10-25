import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilClasesPageRoutingModule } from './perfil-clases-routing.module';

import { PerfilClasesPage } from './perfil-clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilClasesPageRoutingModule
  ],
  declarations: [PerfilClasesPage]
})
export class PerfilClasesPageModule {}
