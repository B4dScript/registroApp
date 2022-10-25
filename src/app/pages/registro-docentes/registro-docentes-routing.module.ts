import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDocentesPage } from './registro-docentes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDocentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDocentesPageRoutingModule {}
