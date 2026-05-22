import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-noticias',
  imports: [Footer, RouterLink, RouterModule, Navbar],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {}