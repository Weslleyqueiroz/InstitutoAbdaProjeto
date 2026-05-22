import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos {
  cursos = [
    { titulo: 'Musicalização Infantil', slug: 'musicalizacao-infantil', imagem: 'https://institutoabda.com.br/uploads/2020/04/cursos_musicalizacao-infantil-2_1.jpg', descricao: 'Sensibilização musical para bebês através de canto, movimento corporal e instrumentos.' },
    { titulo: 'Curso para Terceira Idade', slug: 'terceira-idade', imagem: 'https://institutoabda.com.br/uploads/2020/06/cursos_curso-para-terceira-idade_2.jpg', descricao: 'Nunca é tarde para aprender música. Estimule o cérebro e a criatividade.' },
    { titulo: 'Técnica Vocal', slug: 'tecnica-vocal', imagem: 'https://institutoabda.com.br/uploads/2020/06/cursos_tecnica-vocal_3.jpg', descricao: 'Desenvolva consciência e domínio da voz com exercícios de ritmo e afinação.' },
    { titulo: 'Teoria — Pozzoli', slug: 'teoria-pozzoli', imagem: 'https://institutoabda.com.br/uploads/2020/05/cursos_teoria-pozzoli_4.png', descricao: 'Fundamentos de teoria musical com o método Pozzoli Rítmico.' },
    { titulo: 'Fanfarra', slug: 'fanfarra', imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_fanfarra_5.jfif', descricao: 'Aprenda a tocar em grupo e participe da fanfarra do Instituto ABDA.' },
    { titulo: 'Violino', slug: 'violino', imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_violino_6.jpg', descricao: 'Aprenda violino com professores experientes e formados.' },
    { titulo: 'Crochê', slug: 'croche', imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_croche_7.jpg', descricao: 'Arte do crochê para desenvolver coordenação, criatividade e socialização.' },
    { titulo: 'Clube da Leitura', slug: 'clube-da-leitura', imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_clube-da-leitura_8.jpg', descricao: 'Incentivo à leitura e ao desenvolvimento cultural e intelectual.' },
    { titulo: 'Violão', slug: 'violao', imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_violao_10.jpg', descricao: 'Do básico ao avançado, aprenda violão com metodologia completa.' },
  ];
}