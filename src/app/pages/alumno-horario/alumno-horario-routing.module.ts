import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoHorarioPage } from './alumno-horario.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoHorarioPageRoutingModule {}
