import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface SlideCarrossel {
  imagem: string;
  titulo: string;
  subtitulo: string;
  linkTexto?: string;
  link?: string;
}

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrossel.html',
  styleUrl: './carrossel.css',
})
export class Carrossel implements OnInit, OnDestroy {
  timerSubs!: Subscription;

  @Input() imagens: string[] = [];
  @Input() slides: SlideCarrossel[] = [];

  private _indexImagemAtiva: number = 0;

  get indexImagemAtiva() { return this._indexImagemAtiva; }
  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva = value < this.slidesAtivos.length ? value : 0;
  }

  get slidesAtivos(): SlideCarrossel[] {
    if (this.slides.length > 0) return this.slides;
    return this.imagens.map(img => ({ imagem: img, titulo: '', subtitulo: '' }));
  }

  ngOnInit(): void { this.iniciarTimer(); }
  ngOnDestroy(): void { this.pararTimer(); }

  iniciarTimer(): void {
    this.pararTimer();
    this.timerSubs = timer(5000).subscribe(() => {
      this.ativarImagem(this.indexImagemAtiva + 1);
    });
  }

  pararTimer(): void { this.timerSubs?.unsubscribe(); }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }
}