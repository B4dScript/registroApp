import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-alumno-asistencia',
  templateUrl: './alumno-asistencia.page.html',
  styleUrls: ['./alumno-asistencia.page.scss'],
})
export class AlumnoAsistenciaPage implements OnInit {

  usuario : any ={
  };
  codigo = '';


  constructor(private alertController: AlertController,public router : Router, public ruta: ActivatedRoute,private storageService : StorageService) { }

  async ngOnInit() {
    await this.cargarPersona();
    await console.log(this.usuario);
  }


  async cargarPersona(){
    let usuID = this.ruta.snapshot.paramMap.get('usuarioID');
      this.usuario = await this.storageService.getDatoById('usuarios',usuID)
    }

  async registrarClase(){
    var respuesta: boolean  = await this.storageService.guardarAlumno('asistencia',this.codigo,this.usuario.rut)
    if(respuesta){
      let alert = await this.alertController.create({
        message: 'Asistencia registrada',
        buttons: ['OK']
      })
      alert.present();
    }else{
      let alert = await this.alertController.create({
        message: 'El codigo no coincide',
        buttons: ['OK']
      })
      alert.present();
    }



}
}