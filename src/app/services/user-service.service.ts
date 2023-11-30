import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

        // Paso directamente lo que tenga el formulario de login, sin tener una interfaz especifica para mandar
  signup(data: any): Observable<any> {
    return this.httpClient.post(this.url + "api/usuario/registrar", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  login(data: any): Observable<any> {
    return this.httpClient.post(this.url + "api/usuario/login", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  checkToken(): Observable<any> {
    return this.httpClient.get(this.url + "api/usuario/verificar-token");
  }

  changePassword(data: any): Observable<any> {
    return this.httpClient.post(this.url + "api/usuario/cambiar-password", data, { 
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getAllUsers() {
    return this.httpClient.get(this.url + "api/usuario/listar");
  }

  updateStatus(data: any) {
    return this.httpClient.post(this.url + "api/usuario/actualizar-status", data, { 
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

}