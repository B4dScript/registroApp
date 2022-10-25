import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteHorarioPage } from './docente-horario.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteHorarioPageRoutingModule {}
