import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

const CURSOS: any = {
  'musicalizacao-infantil': {
    titulo: 'Musicalização Infantil',
    imagem: 'https://institutoabda.com.br/uploads/2020/04/cursos_musicalizacao-infantil-2_1.jpg',
    descricao: 'As aulas de musicalização para bebês consistem na sensibilização musical através de atividades envolvendo canto, movimento corporal, brincadeiras, contato com instrumentos de percussão, piano, flauta e violino. Desenvolve a socialização, psicomotricidade, fala, memória e a afetividade. A música é proporcionada como parte integrante do desenvolvimento dos bebês, como facilitadora nas descobertas do mundo externo, e na descoberta da beleza interior de cada um.',
  },
  'terceira-idade': {
    titulo: 'Curso para Terceira Idade',
    imagem: 'https://institutoabda.com.br/uploads/2020/06/cursos_curso-para-terceira-idade_2.jpg',
    descricao: 'O desejo de CANTAR, aprender a TOCAR UM INSTRUMENTO ou participar de um grupo de MUSICALIZAÇÃO aparece também na idade adulta e avançada. Ao longo dos anos o funcionamento cerebral sofre alterações, fazendo com que a capacidade deste órgão diminua significativamente se não cuidarmos dele. Uma pesquisa recente feita por médicos de vários países aponta que as pessoas com mais de 60 anos, quando submetidas à prática musical, mostraram-se menos suscetíveis a doenças cerebrais como Alzheimer e esquizofrenia. Constatou-se que a prática de um instrumento musical nos torna mais lúcidos e criativos, estimulando todo o cérebro. É essencial compreender que um adulto mesmo com idade avançada possui capacidade de aprender, portanto não há obstáculo entre o querer e aprender.',
  },
  'tecnica-vocal': {
    titulo: 'Técnica Vocal',
    imagem: 'https://institutoabda.com.br/uploads/2020/06/cursos_tecnica-vocal_3.jpg',
    descricao: 'Estruturado com a finalidade de trabalhar a arte do canto adquirindo consciência e domínio da voz, conhecendo as estruturas envolvidas para utilizá-las da melhor forma. Desenvolvendo a sensibilidade e a percepção musical com exercícios que focalizam o ritmo, a afinação e a criatividade. Os objetivos e as atividades são delineados de acordo com as necessidades específicas e com o grau de experiência musical de cada aluno ou grupo. No entanto existem alguns aspectos que por sua importância serão sempre trabalhados, como a respiração, relaxamento, postura, articulação, emissão e colocação da voz.',
  },
  'teoria-pozzoli': {
    titulo: 'Teoria — Pozzoli',
    imagem: 'https://institutoabda.com.br/uploads/2020/05/cursos_teoria-pozzoli_4.png',
    descricao: 'Fundamentos de teoria musical com o método Pozzoli Rítmico. Assista à nossa vídeo aula de introdução ao Pozzoli Rítmico.',
    video: 'https://youtu.be/BAxQ3sxmzpw',
  },
  'fanfarra': {
    titulo: 'Fanfarra',
    imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_fanfarra_5.jfif',
    descricao: 'Aprenda a tocar em grupo e participe da fanfarra do Instituto ABDA. Um curso que desenvolve musicalidade, disciplina e trabalho em equipe.',
  },
  'violino': {
    titulo: 'Violino',
    imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_violino_6.jpg',
    descricao: 'Aprenda violino com professores experientes e formados. O Instituto ABDA tem longa tradição no ensino do violino, com ex-alunos atuando em orquestras de renome no Brasil e no exterior.',
  },
  'croche': {
    titulo: 'Crochê',
    imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_croche_7.jpg',
    descricao: 'A arte do crochê desenvolve coordenação motora, criatividade e socialização. Um curso que une tradição artesanal com inclusão social.',
  },
  'clube-da-leitura': {
    titulo: 'Clube da Leitura',
    imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_clube-da-leitura_8.jpg',
    descricao: 'Incentivo à leitura e ao desenvolvimento cultural e intelectual. O Clube da Leitura reúne pessoas apaixonadas por livros para compartilhar histórias e expandir horizontes.',
  },
  'violao': {
    titulo: 'Violão',
    imagem: 'https://institutoabda.com.br/uploads/2022/03/cursos_violao_10.jpg',
    descricao: 'Do básico ao avançado, aprenda violão com metodologia completa. Desenvolva técnica, musicalidade e repertório com professores qualificados.',
  },
};

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [RouterLink, CommonModule, Navbar, Footer],
  templateUrl: './curso-detalhe.html',
  styleUrl: './curso-detalhe.css'
})
export class CursoDetalhe implements OnInit {
  curso: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.curso = CURSOS[slug || ''] || null;
  }
}