import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { v4 } from 'uuid';


@Component({
  selector: 'app-docente-page',
  templateUrl: './docente-page.page.html',
  styleUrls: ['./docente-page.page.scss'],
})
export class DocentePagePage implements OnInit {
  
  constructor(private router : Router, private ActivatedRoute : ActivatedRoute,private storageService : StorageService) { }

  usuario : any [];
  KEY_asistencia= 'clase';
  clases : any [];
  KEY_sesion = 'sesion';


  async ngOnInit() {
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
  }
  logout(){
    this.storageService.cerrarSesion()
  }
}
