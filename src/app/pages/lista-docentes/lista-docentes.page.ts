import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.page.html',
  styleUrls: ['./lista-docentes.page.scss'],
})
export class ListaDocentesPage implements OnInit {

  docentes : any [];
  KEY_personas = 'usuarios';
  upper(texto: string){
    return texto.toLocaleUpperCase()
  }
  constructor( public storageService : StorageService) { }

  async ngOnInit() {
    this.docentes = await this.storageService.getDatos(this.KEY_personas)
    console.log()
  }

  /*ionViewWillEnter() {
    
    this.docentes = this.Servicio.getDocentes()

  }*/

}
