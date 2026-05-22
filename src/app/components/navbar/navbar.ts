import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  sobreAberto = false;
  ajudarAberto = false;
  cursosAberto = false;
  timeAberto = false;
  projetosAberto = false;
  menuMobileAberto = false;

  toggleSobre() { this.sobreAberto = !this.sobreAberto; this.ajudarAberto = false; this.cursosAberto = false; this.timeAberto = false; }
  toggleAjudar() { this.ajudarAberto = !this.ajudarAberto; this.sobreAberto = false; this.cursosAberto = false; this.timeAberto = false; }
  toggleCursos() { this.cursosAberto = !this.cursosAberto; this.sobreAberto = false; this.ajudarAberto = false; this.timeAberto = false; }
  toggleTime() { this.timeAberto = !this.timeAberto; this.sobreAberto = false; this.ajudarAberto = false; this.cursosAberto = false; }
  toggleMobile() { this.menuMobileAberto = !this.menuMobileAberto; }

  fecharTudo() {
    this.sobreAberto = false;
    this.ajudarAberto = false;
    this.cursosAberto = false;
    this.timeAberto = false;
    this.menuMobileAberto = false;
  }

  @HostListener('document:click', ['$event'])
  fecharAoClicarFora(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-navbar')) {
      this.fecharTudo();
    }
  }
}