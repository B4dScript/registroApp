import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-alumno-cursos',
  templateUrl: './alumno-cursos.page.html',
  styleUrls: ['./alumno-cursos.page.scss'],
})
export class AlumnoCursosPage implements OnInit {

  datos = {
   
  };
  lista = [];
  constructor(public router : Router, public ruta: ActivatedRoute, private storage: StorageService) { }

  async ngOnInit() {
    await console.log(this.datos)
    await this.cargarPersona()
  }


  async cargarPersona(){
    this.ruta.paramMap.subscribe( us =>{
      this.datos = this.storage.getDatoById('usuarios',us.get('usuarioID')).then(res =>
        this.lista.push(res))
    })
  }

}
