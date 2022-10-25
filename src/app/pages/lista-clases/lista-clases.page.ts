import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.page.html',
  styleUrls: ['./lista-clases.page.scss'],
})
export class ListaClasesPage implements OnInit {

  clases : any [];
  KEY_asistencia= 'clase';

  constructor(public storageService : StorageService) { }

  async ngOnInit() {
    this.clases = await this.storageService.getDatos(this.KEY_asistencia)
  }

}
