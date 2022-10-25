import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
})
export class ListaAlumnosPage implements OnInit {

  alumnos : any [];
  KEY_personas = 'usuarios';
  upper(texto: string){
    return texto.toLocaleUpperCase()
  }
  constructor( public storageService : StorageService) { }

  async ngOnInit() {
    this.alumnos = await this.storageService.getDatos(this.KEY_personas)
    console.log()
  }
}
