import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-eventos',
  imports: [Footer, RouterLink, RouterModule, Navbar],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {}