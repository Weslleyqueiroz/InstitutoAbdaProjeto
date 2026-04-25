import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-eventos',
  imports: [Footer, RouterLink, RouterModule ],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {}
