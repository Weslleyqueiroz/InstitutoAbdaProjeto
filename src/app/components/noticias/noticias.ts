import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-noticias',
  imports: [Footer, RouterLink, RouterModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias {}
