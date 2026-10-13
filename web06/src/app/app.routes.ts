import { Routes } from '@angular/router';
import { Cadastro  } from './cadastro/cadastro';
import { Home } from './home/home';

export const routes: Routes = [
    // O "path" é o URL e o "component" aponta para o componente que vai aparecer quando entrar no URL
    {path:"cadastro", component:Cadastro},
    {path:"novo-cadastro", component:Cadastro},
    {path:"", component:Home}
];
