import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


import { Footer } from '../footer/footer'; 
import { Parceiros } from '../parceiros/parceiros'; 

@Component({
  selector: 'app-coral',
  standalone: true,

  imports: [
    CommonModule, 
    RouterModule, 
    RouterLink, 
    Footer, 
    Parceiros
  ],
  templateUrl: './coral.component.html',
  styleUrls: ['./coral.component.css']
})
export class CoralComponent implements OnInit, AfterViewInit {

  menuOpen = false;
  scrolled = false;

  constructor(private el: ElementRef) {}

  links = [
    { label: 'Início', path: '/home' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Coral', path: '/coral' },
    { label: 'Contato', path: '/contato' }
  ];

  footerPaginas = [
    { label: 'Início', path: '/home' },
    { label: 'Sobre o Instituto', path: '/sobre' },
    { label: 'Coral e Orquestra', path: '/coral' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Eventos', path: '/eventos' }
  ];

  footerLinks = [
    { label: 'Faça uma Doação', path: '/doacao' },
    { label: 'Seja Voluntário', path: '/voluntario' },
    { label: 'Transparência', path: '/transparencia' },
    { label: 'Política de Privacidade', path: '/privacidade' }
  ];

  ngOnInit(): void {
    this.scrolled = window.scrollY > 60;
  }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  private initAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.fade-up');
    elements.forEach((el: any) => observer.observe(el));
  }
}