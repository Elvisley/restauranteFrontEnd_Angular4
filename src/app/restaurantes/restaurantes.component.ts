import { Component, OnInit } from '@angular/core';

import { RestauranteService } from './restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  private restaurantes : any = [];

  private formcadastro: boolean = false;

  restaurante: any = {
    id: null,
    nome : null,
    logo:null,
    endereco:null,
    telefone:null
  };

  resetRestaurante(){
    this.restaurante = {
        id: null,
        nome : null,
        logo:null,
        endereco:null,
        telefone:null
    };  
  }

  private fileLogo : File;

  constructor(protected restauranteService : RestauranteService) {
      this.getRestaurantes();
  }

  toggleFormCadastro(): void { 
      this.formcadastro = !this.formcadastro;
  }

  cancelar(){
      this.formcadastro = false;
      this.resetRestaurante();
  }


  getRestaurantes(){
    this.resetRestaurante();
    this.formcadastro = false;
    this.restauranteService.getRestaurantes().subscribe( 
          data => this.restaurantes = data,
          error => console.log(error),
          () => console.log("Finishid Get All")
    );
  }

  cadastrar(){
      if(this.restaurante.id == null){
        this.restauranteService.postRestaurante(this.restaurante).subscribe(
            response => (response == true) ? this.getRestaurantes() : alert("Nao foi possivel salvar") ,
            error => console.log(error),
            () => console.log("Finished Created")
        );
      }else{
          this.restauranteService.updateRestaurante(this.restaurante).subscribe(
            response => (response == true) ? this.getRestaurantes() : alert("Nao foi possivel atualizar") ,
            error => console.log(error),
            () => console.log("Finished Updated")
        );
      }
  }

  editar(id_restaurante){
    this.resetRestaurante();
    this.formcadastro = true;
    this.restauranteService.getRestaurantes(id_restaurante).subscribe( 
          data => this.restaurante = data,
          error => console.log(error),
          () => console.log("Finishid GetFindId")
    );
  }

  remover(id_restaurante: any){
    this.restauranteService.remover(id_restaurante).subscribe(
        response => (response == true) ? this.getRestaurantes() : alert("Nao foi possivel remover") ,
        error => console.log(error),
        () => console.log("Finishid Remove")
    );
  }
 
  fileEvent(event){
      this.fileLogo = event.target.files[0];
      this.restaurante.logo = this.fileLogo;
  }
  ngOnInit() {
  }

}
