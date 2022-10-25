import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUsuarioNoaPage } from './perfil-usuario-noa.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsuarioNoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUsuarioNoaPageRoutingModule {}
