import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Storage } from '@ionic/storage-angular'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  datos: any[] = [];
  dato: any ;
  isAuthenticated = new BehaviorSubject(false);

  constructor(private storage:Storage, private router: Router) {
    this.storage.create()
   }


  async agregar(key, dato){
    this.datos = await this.storage.get(key) || [];
    this.dato = await this.getDato(key,dato.rut);
    if(this.dato === undefined){
      dato.id = this.datos.length + 1000 + "";
      this.datos.push(dato)
      await this.storage.set(key,this.datos);
      return true;
    }
    return false;
  }



  async getDatos(key): Promise<any[]> {
    this.datos = await this.storage.get(key)
    return this.datos
  }

  async getDato(key, rut){
    this.datos = await this.storage.get(key) || [];
    this.dato = this.datos.find(persona => persona.rut === rut);
    return(this.dato)
  }

  async getDatoById(key, id){
    this.datos = await this.storage.get(key) || [];
    this.dato = this.datos.find(persona => persona.id === id);
    return(this.dato)
  }

  async getDatobyidasis(key, id){
    this.datos = await this.storage.get(key) || [];
    this.dato = this.datos.find(asistencia => asistencia.id_asis === id);
    return(this.dato)
  }




  async eliminar(key,dato){
    this.datos = await this.storage.get(key) || [];
    this.datos.forEach((value, index) =>{
      if(value.rut === dato){
        this.datos.splice(index,1);
      }
    });
    await this.storage.set(key,this.datos);
  }

  async eliminarById(key,dato){
    this.datos = await this.storage.get(key) || [];
    this.datos.forEach((value, index) =>{
      if(value.id === dato){
        this.datos.splice(index,1);
      }
    });
    await this.storage.set(key,this.datos);
  }

  async modificar(key,dato){
    this.datos = await this.storage.get(key) || [];

    var index = this.datos.findIndex(persona => persona.rut == dato.rut);
    this.datos[index] = dato;
    await this.storage.set(key,this.datos)
  }

  async agregarClase(key, dato){
    this.datos = await this.storage.get(key) || [];

    this.dato = await this.getDatoById(key,dato.id);
    if(this.dato === undefined){
      dato.id = this.datos.length + 3000 + "";
      this.datos.push(dato)
      await this.storage.set(key,this.datos);
      return true;
    }
    return false;
  }



  async agregarAsis(key,dato){
    this.datos = await this.storage.get(key) || [];

    this.dato = await this.getDatoById(key,dato.id_asis);
    if(this.dato === undefined){
      this.datos.push(dato)
      await this.storage.set(key,this.datos);
      return true;
    }
    return false;
  }

  async validarLogin(key, correo, pass){
    this.datos = await this.storage.get(key) || [];
    this.dato = this.datos.find(p => p.correo === correo && p.password == pass);
    if (this.dato != undefined){
      this.isAuthenticated.next(true);
      return this.dato;
    }
  }
  

  async cerrarSesion() {
      this.isAuthenticated.next(false);
      this.router.navigate(['/login']);
      }
  

  getAuth(){
    return this.isAuthenticated.value;
  }


  async guardarAlumno(key,id_asis,rut){
    this.datos = await this.storage.get(key) || [];
    this.dato = this.datos.find(asis => asis.id_asis === id_asis)
    if(this.dato != undefined){
      await this.dato.alumno.push(rut)
      return true;
    }
    return false;
  }
}





