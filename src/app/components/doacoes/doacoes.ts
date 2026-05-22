import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-doacoes',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule],
  templateUrl: './doacoes.html',
  styleUrl: './doacoes.css',
})
export class Doacoes {
  secaoAtiva = 'parceiro-mensal';

  setSecao(secao: string) {
    this.secaoAtiva = secao;
  }

  opcoesMensais = [
    { valor: '10', link: 'http://pag.ae/7V-s1ZNTM' },
    { valor: '25', link: 'http://pag.ae/7V-s1tFQp' },
    { valor: '50', link: 'http://pag.ae/7V-rYDnsQ' },
    { valor: '100', link: 'http://pag.ae/7V-r_mT9r' },
  ];
}