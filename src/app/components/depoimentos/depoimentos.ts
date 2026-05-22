import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule],
  templateUrl: './depoimentos.html',
  styleUrl: './depoimentos.css',
})
export class Depoimentos {
  depoimentos = [
    {
      nome: 'Gabrielly Santos',
      cargo: 'Ex-aluna',
      foto: 'https://institutoabda.com.br/uploads/2021/08/cursos_gabrielly-santos_6.jpg',
      texto: 'Sou Gabrielly Santos, e hoje com 31 anos agradeço a Deus por ter começado meus estudos de música tão nova, aos 7 anos e no Instituto ABDA. Eu via a Orquestra ABDA que me inspirava a tocar também, junto com minha família, meu primeiro professor foi meu tio e maestro Elias. Depois segui meus estudos na Escola de Música do Estado de São Paulo, posteriormente na UNESP e Instituto Federal de Goiás, onde me formei em Licenciatura em Música. Já atuei como chefe de naipe na Sinfônica Heliópolis, Spalla na Camerata da UNESP e camerata do Instituto Baccarelli em São Paulo. Graças ao meu estudo de violino já conheci vários países da Europa, e mudei de Estado para tocar numa Orquestra profissional, atualmente moro em Goiânia, integrando a Orquestra Sinfônica de Goiânia. Sou muito grata à Escola ABDA, onde também fui professora de violino por vários anos.'
    },
    {
      nome: 'Andrea Silverio',
      cargo: 'Ex-aluna',
      foto: 'https://institutoabda.com.br/uploads/2021/02/cursos_andrea-silverio_5.jpeg',
      texto: 'Comecei a frequentar a igreja de Osasco aos 9 anos de idade e desde então a orquestra ABDA chamava minha atenção. Desde uma idade muito jovem eu sabia que queria ser musicista e sabia que queria tocar na orquestra ABDA. Graças ao aprendizado que tive na ABDA, pude aplicar esse conhecimento para ingressar em grupos jovens como a Orquestra Sinfônica Jovem do Estado de São Paulo. Atualmente moro nos EUA onde faço doutorado em música na University of Alabama onde também atuo como professora substituta. Tenho muita gratidão pelo que aprendi na ABDA e desejo vida longa a esse lindo instituto.'
    },
    {
      nome: 'Natan Janczak',
      cargo: 'Ex-aluno',
      foto: 'https://institutoabda.com.br/uploads/2020/04/cursos_natan-janczak_4.jpeg',
      texto: 'Sou Natan Janczak e toco violino. Meu início na música veio com 8 anos, comecei com flauta, depois disso comecei a estudar violino na ABDA. Na época não imaginava que iria seguir música como minha profissão. Em 2013 eu entrei na orquestra ABDA, e hoje sou chefe de naipe dos 1° violinos da orquestra. Graças à música consegui conhecer várias pessoas, lugares, e me encontrar como ser humano. "É preciso fazer o mundo inteiro cantar. A música é tão útil quanto o pão e a água." — Villa Lobos'
    },
    {
      nome: 'Otielen Luz Santos',
      cargo: 'Ex-aluna',
      foto: 'https://institutoabda.com.br/uploads/2020/04/cursos_otielen-luz-santos_3.jpeg',
      texto: 'Meu nome é Otielen Luz Santos e sou violinista. Foi na Escola ABDA que me apaixonei pela música. Aprendi a tocar as primeiras notas no violino, teoria, e em Julho de 2012 foi minha formatura. Hoje participo da Orquestra Filarmônica Santo Amaro como 1º violino, sou chefe de naipe dos segundos violinos da Orquestra ABDA e continuo estudando na EMESP Tom Jobim. O ponto de chegada ainda não sei, mas posso dizer com certeza que o início foi na Escola de Música ABDA, e é um prazer ser testemunha desse projeto maravilhoso.'
    },
    {
      nome: 'Rayane Marques',
      cargo: 'Ex-aluna',
      foto: 'https://institutoabda.com.br/uploads/2020/04/cursos_rayane-marques_2.jpeg',
      texto: 'Me chamo Rayane Marques e sou violinista estudante da Escola de Música do Estado de São Paulo (EMESP Tom Jobim) e toco atualmente na orquestra jovem Tom Jobim. Estudo violino desde os 10 anos de idade e tudo começou na escola de música ABDA! Sou da turma de 2014 e me formei em 2015. A escola de música ABDA faz parte do meu caminho e da minha história.'
    },
    {
      nome: 'Gabriel',
      cargo: 'Ex-aluno',
      foto: 'https://institutoabda.com.br/uploads/2020/04/cursos_gabriel_1.jpeg',
      texto: 'Olá, sou Gabriel e atualmente sou Academista da Orquestra Sinfônica do Estado de São Paulo. Comecei meu estudo de violino com a idade de 7 anos na escola ABDA de música. Graças a Deus que colocou a Maestrina Karen e o Maestro Elias em minha vida, eu despertei o meu amor pela música. Desde então, já tive oportunidades de tocar em grandes palcos, como o Carnegie Hall em NY, Sala São Paulo, Teatro São Pedro e o Teatro Municipal de São Paulo. Sou grato a Deus por tudo, e principalmente por ter iniciado na Escola ABDA de música!'
    },
  ];
}