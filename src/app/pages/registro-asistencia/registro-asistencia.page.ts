import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {
  clase : any ={
    nombre:'',
    sigla:'',
    rutProfe:'',
    sala:''
  }

  clases : any[]=[]


  KEY_asistencia = 'clase'
  
  constructor(private alertController: AlertController,private storage: StorageService, private router : Router) { }

  ngOnInit() {
    console.log(this.clases)
  }


  async guardarClase(){
    var respuesta: boolean = await this.storage.agregarClase(this.KEY_asistencia,this.clase)
    if(respuesta){
      let alert = await this.alertController.create({
        message: 'Clase registrada',
        buttons: ['OK']
      })
      alert.present();
      this.router.navigate(['/admin-page']);
    }else{
      let alert = await this.alertController.create({
        message: 'No se ha registrado la clase',
        buttons: ['OK']
      })
      alert.present();
    }
  }


  async getDatos(){
    
  }
}
