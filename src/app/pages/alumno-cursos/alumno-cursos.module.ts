import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoCursosPageRoutingModule } from './alumno-cursos-routing.module';

import { AlumnoCursosPage } from './alumno-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoCursosPageRoutingModule
  ],
  declarations: [AlumnoCursosPage]
})
export class AlumnoCursosPageModule {}
