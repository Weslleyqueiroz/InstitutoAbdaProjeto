import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

const ALBUNS: any = {
  'musicalizacao-infantil': {
    titulo: 'Musicalização Infantil',
    fotos: Array.from({length: 16}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/musicalizacao-infantil_41/fotos_musicalizacao-infantil_${41 + i}.jpg`
    )
  },
  'turma-do-bordado': {
    titulo: 'Turma do Bordado',
    fotos: Array.from({length: 17}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/turma-do-bordado_40/fotos_turma-do-bordado_${51 + i}.jpg`
    )
  },
  'fanfarra-2022': {
    titulo: 'Fanfarra 2022',
    fotos: Array.from({length: 73}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/fanfarra-2022_39/fotos_fanfarra-2022_${85 + i}.jpg`
    )
  },
  'formatura-dezembro-2021': {
    titulo: 'Formatura Dezembro 2021',
    fotos: Array.from({length: 38}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/formatura-dezembro-2021_38/fotos_formatura-dezembro-2021_${39 + i}.jpg`
    )
  },
  'turma-da-aula-de-canto': {
    titulo: 'Turma da Aula de Canto',
    fotos: Array.from({length: 8}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/turma-da-aula-de-canto_37/fotos_turma-da-aula-de-canto_${37 + i}.jpg`
    )
  },
  'doacoes-de-cestas-de-alimentos': {
    titulo: 'Doações de Cestas de Alimentos',
    fotos: Array.from({length: 47}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/doacoes-de-cestas-basicas_36/fotos_doacoes-de-cestas-basicas_${42 + i}.jpg`
    )
  },
  'dia-das-criancas': {
    titulo: 'Dia das Crianças com Coral e Orquestra',
    fotos: Array.from({length: 36}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/dia-das-criancas-do-instituto_35/fotos_dia-das-criancas-do-instituto_${54 + i}.jpg`
    )
  },
  'clubinho-da-leitura': {
    titulo: 'Clubinho da Leitura',
    fotos: Array.from({length: 84}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/clubinho-da-leitura_33/fotos_clubinho-da-leitura_${96 + i}.jpg`
    )
  },
  'turma-do-croche': {
    titulo: 'Turma do Crochê',
    fotos: Array.from({length: 69}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/turma-do-croche_29/fotos_turma-do-croche_${46 + i}.jpg`
    )
  },
  'turma-do-violao': {
    titulo: 'Turma do Violão',
    fotos: Array.from({length: 36}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/turma-do-violao_27/fotos_turma-do-violao_${47 + i}.jpg`
    )
  },
  'turma-de-espanhol': {
    titulo: 'Turma de Espanhol',
    fotos: Array.from({length: 11}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/turma-de-espanhol_23/fotos_turma-de-espanhol_${25 + i}.jpg`
    )
  },
  'turma-de-ingles': {
    titulo: 'Turma de Inglês',
    fotos: Array.from({length: 4}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/nova-turma-de-ingles_12/fotos_nova-turma-de-ingles_${13 + i}.jpg`
    )
  },
  'turma-de-violinos': {
    titulo: 'Turma de Violinos',
    fotos: Array.from({length: 36}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/turma-de-violinos_11/fotos_turma-de-violinos_${18 + i}.jpg`
    )
  },
  'natal-solidario': {
    titulo: 'Natal Solidário',
    fotos: Array.from({length: 51}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/natal-solidario_7/fotos_natal-solidario_${29 + i}.jpg`
    )
  },
  'tbt-alunos': {
    titulo: '#TBT Alunos do Instituto',
    fotos: Array.from({length: 6}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/tbt-alunos-do-instituto_5/fotos_tbt-alunos-do-instituto_${6 + i}.jpg`
    )
  },
  'formatura-alunos': {
    titulo: 'Formatura - Alunos Instituto Abda',
    fotos: Array.from({length: 240}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/formatura-alunos-instituto-abda_4/fotos_formatura-alunos-instituto-abda_${243 + i}.jpg`
    )
  },
  'inauguracao': {
    titulo: 'Inauguração Instituto Abda',
    fotos: Array.from({length: 118}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/inauguracao-instituto-abda_3/fotos_inauguracao-instituto-abda_${39 + i}.jpg`
    )
  },
  'apresentacao-junho-2019': {
    titulo: 'Apresentação 21 de Junho de 2019',
    fotos: Array.from({length: 130}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/apresentacao-21_2/fotos_apresentacao-21_${34 + i}.jpg`
    )
  },
  'formatura-turma-canto-2019': {
    titulo: 'Formatura da Turma de Canto 29/11/2019',
    fotos: Array.from({length: 117}, (_, i) =>
      `https://institutoabda.com.br/uploads/fotos/apresentacao-osasco_1/fotos_apresentacao-osasco_${7 + i}.jpg`
    )
  },
};

@Component({
  selector: 'app-album-detalhe',
  standalone: true,
  imports: [RouterLink, CommonModule, Navbar, Footer],
  templateUrl: './album-detalhe.html',
  styleUrl: './album-detalhe.css'
})
export class AlbumDetalhe implements OnInit {
  album: any = null;
  fotoAtiva: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.album = ALBUNS[slug || ''] || null;
  }

  abrirFoto(foto: string) { this.fotoAtiva = foto; }
  fecharFoto() { this.fotoAtiva = null; }
}