import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoPagePage } from './alumno-page.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoPagePage,
    children :[  
      {
      path: 'alumno-asistencia/:usuarioID',
      loadChildren: () => import('./../alumno-asistencia/alumno-asistencia.module').then( m => m.AlumnoAsistenciaPageModule)
    },
    {
      path: 'alumno-horario/:usuarioID',
      loadChildren: () => import('./../alumno-horario/alumno-horario.module').then( m => m.AlumnoHorarioPageModule)
    },
    {
      path: 'alumno-cursos/:usuarioID',
      loadChildren: () => import('./../alumno-cursos/alumno-cursos.module').then( m => m.AlumnoCursosPageModule)
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoPagePageRoutingModule {}
