import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-seja-parceiro',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule, FormsModule],
  templateUrl: './seja-parceiro.html',
  styleUrl: './seja-parceiro.css',
})
export class SejaParceiro {
  nome = '';
  email = '';
  telefone = '';
  cidade = '';
  como = '';
  mensagem = '';
  enviado = false;
  erro = false;

  enviar() {
    if (this.nome && this.email && this.telefone && this.como) {
      this.enviado = true;
      this.erro = false;
      this.nome = '';
      this.email = '';
      this.telefone = '';
      this.cidade = '';
      this.como = '';
      this.mensagem = '';
    } else {
      this.erro = true;
    }
  }
}