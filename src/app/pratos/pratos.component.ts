
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PratosService } from './pratos.service';
import { RestauranteService } from './../restaurantes/restaurante.service';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {

  private pratos: any = [];

  private id_restaurante: number;

  private formcadastro: boolean = false;

  private restaurante: any;

  private prato: any = {
    nome: null,
    restauranteId: null,
    foto: null,
    descricao: null,
    preco: null
  }

  constructor(private pratoService: PratosService, private route: ActivatedRoute,
              private restauranteService: RestauranteService) {
    this.id_restaurante = route.snapshot.params['id'];
    this.getPratosRestaurante(); 
    this.prato.restauranteId = this.id_restaurante;
    
    this.restauranteService.getRestaurantes(this.id_restaurante).subscribe(
        data => this.restaurante = data
    );
  }

  ngOnInit() {
  }

  resetPrato(){
    this.prato = {
      nome: null,
      restauranteId: null,
      foto: null,
      descricao: null,
      preco: null
    }
  }

  toggleFormCadastro(): void { 
      this.formcadastro = !this.formcadastro;
  }

  cancelar(){
      this.formcadastro = false;
      this.resetPrato();
  }

  fileEvent(event){
      let fileLogo = event.target.files[0];
      this.prato.foto = fileLogo;
  }

  getPratosRestaurante(){
      this.formcadastro = false;
      this.resetPrato();
      this.pratoService.getPratosRestaurante(this.id_restaurante).subscribe(
        data => this.pratos = data,
        error => console.log(error),
        () => console.log("Finished GetPratosRestaurante")
      );
  }

  editar(id_prato: any){
      this.formcadastro = true;
      this.resetPrato();
      this.pratoService.getPrato(id_prato).subscribe(
        data => this.prato = data,
        error => console.log(error),
        () => console.log("Finished GetPrato")
      );
  }

  remover(id_prato: any){
    if(confirm("Deseja realmente remover ?")){
      this.pratoService.remover(id_prato).subscribe(
          response => (response == true) ? this.getPratosRestaurante() : alert("Nao foi possivel remover") ,
          error => console.log(error),
          () => console.log("Finishid Remove")
      );
    }
  }

  cadastrar(){
    if(this.prato.id == null){
      this.pratoService.postPrato(this.prato).subscribe(
        response => (response == true) ? this.getPratosRestaurante() : alert("Nao foi possivel salvar"),
        error => console.log(error),
        () => console.log("Finished Cadastrar Prato")
      );
    }else{
      this.pratoService.updatePrato(this.prato).subscribe(
        response => (response == true) ? this.getPratosRestaurante() : alert("Nao foi possivel atualizar"),
        error => console.log(error),
        () => console.log("Finished Atualizar Prato")
      );
    }
  }

}
