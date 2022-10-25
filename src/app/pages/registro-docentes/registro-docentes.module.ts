import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDocentesPageRoutingModule } from './registro-docentes-routing.module';

import { RegistroDocentesPage } from './registro-docentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroDocentesPageRoutingModule
  ],
  declarations: [RegistroDocentesPage]
})
export class RegistroDocentesPageModule {}
