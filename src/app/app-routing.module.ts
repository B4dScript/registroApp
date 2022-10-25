import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'admin-page',
    loadChildren: () => import('./pages/admin-page/admin-page.module').then( m => m.AdminPagePageModule)
  },
  {
    path: 'alumno-page',
    loadChildren: () => import('./pages/alumno-page/alumno-page.module').then( m => m.AlumnoPagePageModule)
  },
  {
    path: 'docente-page',
    loadChildren: () => import('./pages/docente-page/docente-page.module').then( m => m.DocentePagePageModule)
  },
  {
    path: 'registro-docentes',
    loadChildren: () => import('./pages/registro-docentes/registro-docentes.module').then( m => m.RegistroDocentesPageModule)
  },
  {
    path: 'lista-docentes',
    loadChildren: () => import('./pages/lista-docentes/lista-docentes.module').then( m => m.ListaDocentesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lista-alumnos',
    loadChildren: () => import('./pages/lista-alumnos/lista-alumnos.module').then( m => m.ListaAlumnosPageModule)
  },
  {
    path: 'perfil-usuario/:usuarioID',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'registro-asistencia',
    loadChildren: () => import('./pages/registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule)
  },
  {
    path: 'qr/:claseID',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'perfil-usuario-noa/:usuarioID',
    loadChildren: () => import('./pages/perfil-usuario-noa/perfil-usuario-noa.module').then( m => m.PerfilUsuarioNoaPageModule)
  },
  {
    path: 'lista-clases',
    loadChildren: () => import('./pages/lista-clases/lista-clases.module').then( m => m.ListaClasesPageModule)
  },
  {
    path: 'perfil-clases/:claseID',
    loadChildren: () => import('./pages/perfil-clases/perfil-clases.module').then( m => m.PerfilClasesPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },


  



  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
