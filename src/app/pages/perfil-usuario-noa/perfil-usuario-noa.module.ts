import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUsuarioNoaPageRoutingModule } from './perfil-usuario-noa-routing.module';

import { PerfilUsuarioNoaPage } from './perfil-usuario-noa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUsuarioNoaPageRoutingModule
  ],
  declarations: [PerfilUsuarioNoaPage]
})
export class PerfilUsuarioNoaPageModule {}
