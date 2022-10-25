import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoHorarioPageRoutingModule } from './alumno-horario-routing.module';

import { AlumnoHorarioPage } from './alumno-horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoHorarioPageRoutingModule
  ],
  declarations: [AlumnoHorarioPage]
})
export class AlumnoHorarioPageModule {}
