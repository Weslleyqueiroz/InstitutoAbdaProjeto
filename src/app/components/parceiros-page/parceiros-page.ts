import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-parceiros-page',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule],
  templateUrl: './parceiros-page.html',
  styleUrl: './parceiros-page.css',
})
export class ParceirosPage {
  parceiros = [
    {
      nome: 'Instituto ABDA',
      logo: 'https://institutoabda.com.br/uploads/2020/04/parceiros_instituto-abda_3.png',
    },
    {
      nome: 'Orquestra ABDA',
      logo: 'https://institutoabda.com.br/uploads/2020/04/parceiros_orquestra-abda_1.png',
    },
  ];
}