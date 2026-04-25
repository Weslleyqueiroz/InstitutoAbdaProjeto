import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { CoralComponent } from './components/coral/coral.component';
import { Cadastrar } from './components/cadastrar/cadastrar';
import { Eventos } from './components/eventos/eventos';
import { Noticias } from './components/noticias/noticias';
import { NossoTime } from './components/nosso-time/nosso-time';
import { Perfil } from './components/perfil/perfil';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'coral', component: CoralComponent },
  { path: 'projetos', component: Home },
  { path: 'contato', component: Home },
  {path: 'cadastrar', component: Cadastrar},
  {path: 'eventos', component: Eventos},
  {path: 'noticias' , component: Noticias},
  {path: 'nosso-time', component: NossoTime},
  { path: 'nosso-time/perfil/:slug', component: Perfil },
];