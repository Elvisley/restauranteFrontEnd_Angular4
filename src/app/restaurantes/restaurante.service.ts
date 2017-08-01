import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class RestauranteService {

  private baseUrl = "http://localhost:5000/api/v1/restaurante";

  constructor(private http : Http) { 
  }

  getRestaurantes(id_restaurante = null){
    if(id_restaurante == null){
       return this.http.get(this.baseUrl).map(resp => resp.json());    
    }else{
      return this.http.get(this.baseUrl + "/" + id_restaurante).map(resp => resp.json());    
    }
  }

  updateRestaurante(restaurante: any){
    let formData: FormData = new FormData();
    formData.append('nome', restaurante.nome);
    formData.append('endereco', restaurante.endereco);
    formData.append('telefone', restaurante.telefone);
    
    if(restaurante.logo != null){
      formData.append('logo', restaurante.logo , restaurante.logo.name);
    }
    
    let headers = new Headers();
    headers.append('Accept','application/json');
     
    return this.http.put(this.baseUrl + "/" + restaurante.id ,formData, {headers:headers} ).map(resp => resp.json());
  }

  postRestaurante(restaurante: any){

    let formData: FormData = new FormData();
    formData.append('nome', restaurante.nome);
    formData.append('endereco', restaurante.endereco);
    formData.append('telefone', restaurante.telefone);
    
    if(restaurante.logo != null){
      formData.append('logo', restaurante.logo , restaurante.logo.name);
    }
    
    let headers = new Headers();
    headers.append('Accept','application/json');
     
    return this.http.post(this.baseUrl,formData, {headers:headers} ).map(resp => resp.json());
  }

  remover(id_restaurante: any){
    return this.http.delete(this.baseUrl + "/" + id_restaurante).map(resp => resp.json());
  }

}
