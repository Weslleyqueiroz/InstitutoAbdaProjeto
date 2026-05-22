import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule],
  templateUrl: './fotos.html',
  styleUrl: './fotos.css',
})
export class Fotos {
 albuns = [
  { titulo: 'Musicalização Infantil', quantidade: 16, capa: 'https://institutoabda.com.br/uploads/fotos/musicalizacao-infantil_41/fotos_musicalizacao-infantil_44.jpg', link: '/fotos/musicalizacao-infantil' },
  { titulo: 'Turma do Bordado', quantidade: 17, capa: 'https://institutoabda.com.br/uploads/fotos/turma-do-bordado_40/fotos_turma-do-bordado_51.jpg', link: '/fotos/turma-do-bordado' },
  { titulo: 'Fanfarra 2022', quantidade: 73, capa: 'https://institutoabda.com.br/uploads/fotos/fanfarra-2022_39/fotos_fanfarra-2022_85.jpg', link: '/fotos/fanfarra-2022' },
  { titulo: 'Formatura Dezembro 2021', quantidade: 38, capa: 'https://institutoabda.com.br/uploads/fotos/formatura-dezembro-2021_38/fotos_formatura-dezembro-2021_39.jpg', link: '/fotos/formatura-dezembro-2021' },
  { titulo: 'Turma da Aula de Canto', quantidade: 8, capa: 'https://institutoabda.com.br/uploads/fotos/turma-da-aula-de-canto_37/fotos_turma-da-aula-de-canto_37.jpg', link: '/fotos/turma-da-aula-de-canto' },
  { titulo: 'Doações de Cestas de Alimentos', quantidade: 47, capa: 'https://institutoabda.com.br/uploads/fotos/doacoes-de-cestas-basicas_36/fotos_doacoes-de-cestas-basicas_42.jpg', link: '/fotos/doacoes-de-cestas-de-alimentos' },
  { titulo: 'Dia das Crianças com Coral e Orquestra', quantidade: 36, capa: 'https://institutoabda.com.br/uploads/fotos/dia-das-criancas-do-instituto_35/fotos_dia-das-criancas-do-instituto_54.jpg', link: '/fotos/dia-das-criancas' },
  { titulo: 'Clubinho da Leitura', quantidade: 84, capa: 'https://institutoabda.com.br/uploads/fotos/clubinho-da-leitura_33/fotos_clubinho-da-leitura_96.jpg', link: '/fotos/clubinho-da-leitura' },
  { titulo: 'Turma do Crochê', quantidade: 69, capa: 'https://institutoabda.com.br/uploads/fotos/turma-do-croche_29/fotos_turma-do-croche_46.jpg', link: '/fotos/turma-do-croche' },
  { titulo: 'Turma do Violão', quantidade: 36, capa: 'https://institutoabda.com.br/uploads/fotos/turma-do-violao_27/fotos_turma-do-violao_47.jpg', link: '/fotos/turma-do-violao' },
  { titulo: 'Turma de Espanhol', quantidade: 11, capa: 'https://institutoabda.com.br/uploads/fotos/turma-de-espanhol_23/fotos_turma-de-espanhol_25.jpg', link: '/fotos/turma-de-espanhol' },
  { titulo: 'Turma de Inglês', quantidade: 4, capa: 'https://institutoabda.com.br/uploads/fotos/nova-turma-de-ingles_12/fotos_nova-turma-de-ingles_13.jpg', link: '/fotos/turma-de-ingles' },
  { titulo: 'Turma de Violinos', quantidade: 36, capa: 'https://institutoabda.com.br/uploads/fotos/turma-de-violinos_11/fotos_turma-de-violinos_18.jpg', link: '/fotos/turma-de-violinos' },
  { titulo: 'Natal Solidário', quantidade: 51, capa: 'https://institutoabda.com.br/uploads/fotos/natal-solidario_7/fotos_natal-solidario_29.jpg', link: '/fotos/natal-solidario' },
  { titulo: '#TBT Alunos do Instituto', quantidade: 6, capa: 'https://institutoabda.com.br/uploads/fotos/tbt-alunos-do-instituto_5/fotos_tbt-alunos-do-instituto_6.jpg', link: '/fotos/tbt-alunos' },
  { titulo: 'Formatura - Alunos Instituto Abda', quantidade: 240, capa: 'https://institutoabda.com.br/uploads/fotos/formatura-alunos-instituto-abda_4/fotos_formatura-alunos-instituto-abda_243.jpg', link: '/fotos/formatura-alunos' },
  { titulo: 'Inauguração Instituto Abda', quantidade: 118, capa: 'https://institutoabda.com.br/uploads/fotos/inauguracao-instituto-abda_3/fotos_inauguracao-instituto-abda_39.jpg', link: '/fotos/inauguracao' },
  { titulo: 'Apresentação 21 de Junho de 2019', quantidade: 130, capa: 'https://institutoabda.com.br/uploads/fotos/apresentacao-21_2/fotos_apresentacao-21_34.jpg', link: '/fotos/apresentacao-junho-2019' },
  { titulo: 'Formatura da Turma de Canto 29/11/2019', quantidade: 117, capa: 'https://institutoabda.com.br/uploads/fotos/apresentacao-osasco_1/fotos_apresentacao-osasco_7.jpg', link: '/fotos/formatura-turma-canto-2019' },
];
}