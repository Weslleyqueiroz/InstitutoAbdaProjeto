import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Carrossel } from "./components/carrossel/carrossel";
import { Parceiros } from "./components/parceiros/parceiros";
import { Eventos } from './components/eventos/eventos';
import { Noticias } from './components/noticias/noticias';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Footer, Carrossel, Parceiros, Eventos, Noticias],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('InstitutoAbdaProjeto');
}
