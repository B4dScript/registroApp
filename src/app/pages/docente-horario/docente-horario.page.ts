import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-docente-horario',
  templateUrl: './docente-horario.page.html',
  styleUrls: ['./docente-horario.page.scss'],
})
export class DocenteHorarioPage implements OnInit {

  KEY_sesion = 'sesion';
  dato = {};
  lista : any []= [];

  constructor(private storageService: StorageService, private ruta : ActivatedRoute) { }

  async ngOnInit() {
    console.log( this.lista)
  }

  async getCurrentUser(){
    this.ruta.paramMap.subscribe(usuario => {
      this.dato = this.storageService.getDato('sesion',usuario.get('rut')).then(sesion =>
        this.lista.push(sesion))
    })
  }




}
