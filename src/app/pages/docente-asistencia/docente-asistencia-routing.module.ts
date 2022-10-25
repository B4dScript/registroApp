import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteAsistenciaPage } from './docente-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteAsistenciaPageRoutingModule {}
