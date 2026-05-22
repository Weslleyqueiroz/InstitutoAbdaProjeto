import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  nome = '';
  email = '';
  telefone = '';
  assunto = '';
  mensagem = '';
  enviado = false;
  erro = false;

  enviar() {
    if (this.nome && this.email && this.mensagem) {
      this.enviado = true;
      this.erro = false;
      this.nome = '';
      this.email = '';
      this.telefone = '';
      this.assunto = '';
      this.mensagem = '';
    } else {
      this.erro = true;
    }
  }
}