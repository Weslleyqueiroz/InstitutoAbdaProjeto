import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-video-aulas',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule],
  templateUrl: './video-aulas.html',
  styleUrl: './video-aulas.css',
})
export class VideoAulas {
  constructor(private sanitizer: DomSanitizer) {}

  videos = [
    {
      titulo: 'Pozzoli Rítmico 2',
      descricao: 'Continuação do método Pozzoli Rítmico, aprofundando os fundamentos de teoria musical.',
      embedId: 'r2Sw0eNVk4Q',
      categoria: 'Teoria',
    },
    {
      titulo: 'Técnica Vocal',
      descricao: 'Aula de técnica vocal com a Professora Caroline Raquel, exercícios de respiração e postura.',
      embedId: 'k7oeYA7-4eY',
      categoria: 'Canto',
    },
    {
      titulo: 'Técnica Vocal 2',
      descricao: 'Segunda aula de técnica vocal, aprofundando os exercícios de colocação e emissão de voz.',
      embedId: 'RE3j0JwRfGA',
      categoria: 'Canto',
    },
    {
      titulo: 'Técnica Vocal 3',
      descricao: 'Terceira aula de técnica vocal com exercícios avançados de respiração e afinação.',
      embedId: 'olCjmcdX1zs',
      categoria: 'Canto',
    },
    {
      titulo: 'Teoria — Iniciação ao Pozzoli',
      descricao: 'Introdução ao método Pozzoli Rítmico, fundamentos de teoria musical para iniciantes.',
      embedId: 'BAxQ3sxmzpw',
      categoria: 'Teoria',
    },
  ];

  getUrl(embedId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${embedId}`
    );
  }
}