import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoAsistenciaPage } from './alumno-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoAsistenciaPageRoutingModule {}
