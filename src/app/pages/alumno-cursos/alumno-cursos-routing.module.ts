import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoCursosPage } from './alumno-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoCursosPageRoutingModule {}
