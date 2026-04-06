import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { CoralComponent } from './components/coral/coral.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'coral', component: CoralComponent },
  { path: 'projetos', component: Home },
  { path: 'contato', component: Home }
];