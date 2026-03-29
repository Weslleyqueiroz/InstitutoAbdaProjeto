import { Component } from '@angular/core';
import { Carrossel } from "../carrossel/carrossel";
import { Parceiros } from '../parceiros/parceiros';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Carrossel, Parceiros,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
