import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoAsistenciaPageRoutingModule } from './alumno-asistencia-routing.module';

import { AlumnoAsistenciaPage } from './alumno-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoAsistenciaPageRoutingModule
  ],
  declarations: [AlumnoAsistenciaPage]
})
export class AlumnoAsistenciaPageModule {}
