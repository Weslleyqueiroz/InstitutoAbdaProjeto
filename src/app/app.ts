import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';
import { Carrossel } from "./components/carrossel/carrossel";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Footer, Carrossel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('InstitutoAbdaProjeto');
}
