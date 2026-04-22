import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { CoralComponent } from './components/coral/coral.component';
import { Cadastrar } from './components/cadastrar/cadastrar';
import { Eventos } from './components/eventos/eventos';
import { Noticias } from './components/noticias/noticias';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'coral', component: CoralComponent },
  { path: 'projetos', component: Home },
  { path: 'contato', component: Home },
  {path: 'cadastrar', component: Cadastrar},
  {path: 'eventos', component: Eventos},
  {path: 'noticias' , component: Noticias}
];