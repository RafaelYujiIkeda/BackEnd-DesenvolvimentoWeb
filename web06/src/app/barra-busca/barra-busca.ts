import { Component } from '@angular/core';

// Os "import"s que for adicionando, tem que colocar dentro do [] do "imports"
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  // O "selector" é como se fosse um "id" ou "tag"
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {

  mensagem:String = "";
  termo:String = "";

  public Buscar(){
    this.mensagem = "Busca Realizada " + this.termo + "!" ;
  }

}
