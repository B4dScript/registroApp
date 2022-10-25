import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteAsistenciaPageRoutingModule } from './docente-asistencia-routing.module';

import { DocenteAsistenciaPage } from './docente-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteAsistenciaPageRoutingModule
  ],
  declarations: [DocenteAsistenciaPage]
})
export class DocenteAsistenciaPageModule {}
