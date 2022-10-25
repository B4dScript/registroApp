import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-docente-cursos',
  templateUrl: './docente-cursos.page.html',
  styleUrls: ['./docente-cursos.page.scss'],
})
export class DocenteCursosPage implements OnInit {


  usuario : any [];
  KEY_asistencia= 'clase';
  clases : any [];


  constructor(public router : Router, public ruta: ActivatedRoute,private storageService : StorageService) { }

  async ngOnInit() {
    await this.cargarPersona();
    await console.log(this.usuario);
    await this.mostrarClases();
  }


  async cargarPersona(){
    let usuID = this.ruta.snapshot.paramMap.get('usuarioID');
      this.usuario = await this.storageService.getDatoById('usuarios',usuID)
    }
  

  
  async mostrarClases(){
    this.clases = await this.storageService.getDatos(this.KEY_asistencia);
  }
}