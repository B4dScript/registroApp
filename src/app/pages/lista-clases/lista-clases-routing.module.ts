import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaClasesPage } from './lista-clases.page';

const routes: Routes = [
  {
    path: '',
    component: ListaClasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaClasesPageRoutingModule {}
