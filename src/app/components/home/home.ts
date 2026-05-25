import { Component } from '@angular/core';
import { Carrossel } from "../carrossel/carrossel";
import { Parceiros } from '../parceiros/parceiros';
import { Footer } from '../footer/footer';
import { RouterLink } from "@angular/router";
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Carrossel, Parceiros, Footer, RouterLink, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}