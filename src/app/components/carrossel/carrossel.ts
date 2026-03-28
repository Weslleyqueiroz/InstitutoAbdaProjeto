import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-carrossel',
  standalone: true, //
  imports: [CommonModule], 
  templateUrl: './carrossel.html',
  styleUrl: './carrossel.css',
})
export class Carrossel implements OnInit, OnDestroy {
  timerSubs!: Subscription;

  @Input() imagens: string[] = []; 

  private _indexImagemAtiva: number = 0;

  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva = value < this.imagens.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {

    this.pararTimer();
    

    this.timerSubs = timer(3000).subscribe(() => {
      this.ativarImagem(this.indexImagemAtiva + 1);
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer(); 
  }
}