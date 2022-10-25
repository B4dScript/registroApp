import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteHorarioPageRoutingModule } from './docente-horario-routing.module';

import { DocenteHorarioPage } from './docente-horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteHorarioPageRoutingModule
  ],
  declarations: [DocenteHorarioPage]
})
export class DocenteHorarioPageModule {}
