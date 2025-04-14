import { Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ProdutoComponent } from './components/produto/produto.component';

export const routes: Routes = [
  {path: '', component: PrimeiroComponenteComponent},
  {path: 'produtos', component: ProdutoComponent},
  {path: '*', component: PaginaNaoEncontradaComponent}
];
