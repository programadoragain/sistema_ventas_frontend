import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }
  
  add(data: any) {
    return this.httpClient.post(this.url + "/api/producto/registrar", data,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }  
  
  update(data: any) {
    return this.httpClient.put(this.url + "/api/producto/actualizar", data,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  
  getAllProducts() {
    return this.httpClient.get(this.url + "/api/producto/listar");
  }

  getProductById(id: any) {
    return this.httpClient.get(this.url + "/api/producto/obtener" + id,
    { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  
  getAllProductsByCategory(id: any) {
    return this.httpClient.get(this.url + "/api/producto/listarporcategoria" + id,
    { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  getInStock() {
    return this.httpClient.get(this.url + "/api/producto/listarenstock");
  }
  
  /*
  updateStatus(data: any) {
    return this.httpClient.post(this.url + "/product/update-status", data,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  */
  
  delete(id: any) {
    return this.httpClient.delete(this.url + "/api/producto/eliminar" + id,
    { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  
}