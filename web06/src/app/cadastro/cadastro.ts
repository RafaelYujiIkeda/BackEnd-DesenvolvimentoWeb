import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {

  mensagem:String = "";
  nome:String = "";

  public Cadastrar(){
    this.mensagem = "Bem Vindo(a) " + this.nome + "!" ;
  }
}
