import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

const EVENTOS: any = {
  'formatura-turma-canto-junho-2019': {
    titulo: 'Formatura da Turma de Canto',
    data: '21/06/2019',
    hora: '18:00',
    fim: '21 Junho 2019',
    local: 'Rua Alice Manholer Piteri, 307 - Sala 10, Centro Osasco/SP 06.018-160',
    descricao: 'Formatura da Turma de Canto do Instituto ABDA.',
    imagem: '/eventos_formatura-da-turma-de-canto-2019-06-21_1.jpg'
  },
  'formatura-turma-canto-novembro-2019': {
    titulo: 'Formatura da Turma de Canto',
    data: '21/11/2019',
    hora: '19:00',
    fim: '21 Novembro 2019',
    local: 'Rua Alice Manholer Piteri, 307 - Sala 10, Centro Osasco/SP 06.018-160',
    descricao: 'Formatura da Turma de Canto do Instituto ABDA.',
    imagem: '/eventos_formatura-da-turma-de-canto-2019-06-21_1.jpg'
  },
  'terceiro-evento': {
    titulo: 'Este é meu terceiro evento',
    data: '07/03/2020',
    hora: '06:00',
    fim: '07 Março 2020',
    local: 'Rua Duzentos e Dezenove, 278 - São Paulo - SP',
    descricao: 'Aqui vai os detalhes do evento tais como os nomes dos participantes.',
    imagem: '/eventos_formatura-da-turma-de-canto-2019-06-21_1.jpg'
  }
};

@Component({
  selector: 'app-evento-detalhe',
  standalone: true,
  imports: [RouterLink, CommonModule, Navbar, Footer],
  templateUrl: './evento-detalhe.html',
  styleUrls: ['./evento-detalhe.css']
})
export class EventoDetalhe implements OnInit {
  evento: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.evento = EVENTOS[slug || ''] || null;
  }
}