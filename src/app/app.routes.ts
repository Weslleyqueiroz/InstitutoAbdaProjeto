import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';

export const routes: Routes = [
    { 
    path: 'home',
    component: Home,
    title: 'Instituto ABDA'
},
{
    path: 'sobre',
    component: Sobre,
    title: 'Sobre nós'
}
];
