import { Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';

export const routes: Routes = [
  {path: '', component: PrimeiroComponenteComponent},
  {path: 'usuarios', component: PaginaNaoEncontradaComponent},
  {path: '*', component: PaginaNaoEncontradaComponent}
];
