import { Component, signal } from '@angular/core';

// Os "import"s que for adicionando, tem que colocar dentro do [] do "imports"
import { RouterOutlet } from '@angular/router';
import { BarraBusca } from './barra-busca/barra-busca';
import { Menu } from './menu/menu';
import { Rodape } from './rodape/rodape';
import { Topo } from './topo/topo';

@Component({
  imports: [RouterOutlet, BarraBusca, Menu, Rodape, Topo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('web06');
}
