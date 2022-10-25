import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteCursosPage } from './docente-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteCursosPageRoutingModule {}
