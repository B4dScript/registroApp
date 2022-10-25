import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilClasesPage } from './perfil-clases.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilClasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilClasesPageRoutingModule {}
