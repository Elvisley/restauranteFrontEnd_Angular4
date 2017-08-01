import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PratosService {

  private baseUrl = "http://localhost:5000/api/v1/prato";

  constructor(private http : Http) { 
  }

  getPratosRestaurante(id_restaurante){
    return this.http.get(this.baseUrl + "/restaurante/" + id_restaurante).map(resp => resp.json());    
  }

  getPrato(id_prato){
    return this.http.get(this.baseUrl + "/" + id_prato).map(resp => resp.json());    
  }

  postPrato(prato: any){

    console.log(prato);

    let formData: FormData = new FormData();
    formData.append('nome', prato.nome);
    formData.append('descricao', prato.descricao);
    formData.append('restauranteId', prato.restauranteId);
    formData.append('preco', prato.preco);
    
    if(prato.foto != null){
      formData.append('foto', prato.foto , prato.foto.name);
    }
    
    let headers = new Headers();
    headers.append('Accept','application/json');
     
    return this.http.post(this.baseUrl,formData, {headers:headers} ).map(resp => resp.json());
  }

  updatePrato(prato: any){
    
    let formData: FormData = new FormData();
    formData.append('nome', prato.nome);
    formData.append('descricao', prato.descricao);
    formData.append('restauranteId', prato.restauranteId);
    formData.append('preco', prato.preco);
    
    if(prato.foto != null){
      formData.append('foto', prato.foto , prato.foto.name);
    }
    
    let headers = new Headers();
    headers.append('Accept','application/json');
     
    return this.http.put(this.baseUrl +"/"+ prato.id ,formData, {headers:headers} ).map(resp => resp.json());
  }

  remover(id_prato: any){
     return this.http.delete(this.baseUrl + "/" + id_prato).map(resp => resp.json());
  }
}


