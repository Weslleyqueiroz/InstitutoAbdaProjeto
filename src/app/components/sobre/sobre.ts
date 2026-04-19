import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';
import { Home } from '../home/home';

@Component({
  selector: 'app-sobre',
  imports: [Footer, RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
  standalone: true,
})
export class Sobre {}
