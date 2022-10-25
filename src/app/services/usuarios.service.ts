import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: any[] = [
    {
      id: '1',
      rut:'11.111.111-1',
      nombre:'admin',
      fecha_nac: '2000-03-12',
      correo:'admin@admin.com',
      semestre: 1,
      password: 'admin',
      usuario:'administrador'
    }
  ]

  isAuthenticated = new BehaviorSubject(false);

  constructor(private router : Router) { }

  
  getUsuarios(){
    return this.usuarios
  }
  getUsuario(rut){
    return this.usuarios.find(usuario => usuario.rut == rut);
  }

  addUsuarios(usuario):boolean{
    if( this.getUsuario(usuario.rut) == undefined ){
      usuario.id = this.usuarios.length + 1000 + "";
      this.usuarios.push(usuario)
      return true;
    }
    return false;
  }

  getUsuarioById(usuarioID: string){
    return{
      ...this.usuarios.find( us =>{
        return us.id === usuarioID
      })
    }
  }

  getDocentes(){
    return this.usuarios.filter(usuario =>{
      usuario.usuario = 'docente'
    })
  }

  existecorreo(correo){
    return this.usuarios.find(u => u.correo == correo);
  }
  getAuth(){
    return this.isAuthenticated.value;
  }
  logout(){
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  validarLogin( correo, pass){
    var usuarioLogin: any;
    usuarioLogin = this.usuarios.find(u => u.correo == correo && u.password == pass);
    if (usuarioLogin != undefined){
      this.isAuthenticated.next(true);
      return usuarioLogin;
    }
  }
 
}
