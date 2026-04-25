import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';

interface Membro {
  slug: string;
  nome: string;
  cargo: string;
  foto: string;
  paypal?: string;
  pagbank?: string;
}

export const TODOS_MEMBROS: Membro[] = [

  // ── PROFESSORES ──────────────────────────────────────────
  {
    slug: 'carol-aragao',
    nome: 'Carol Aragão',
    cargo: 'Professora de Espanhol',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_carol-aragao_28.jpg',
    paypal: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MJLHZ6ALPCJFA&source=url',
    pagbank: 'https://pag.ae/7V-pFu5X9'
  },
  {
    slug: 'joaquim-pereira',
    nome: 'Joaquim Pereira',
    cargo: 'Professor de Violino',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_joaquim-pereira_15.jpg',
  },
  {
    slug: 'joao-victor',
    nome: 'João Victor',
    cargo: 'Professor da Fanfarra',
    foto: 'https://institutoabda.com.br/uploads/2022/06/time_joao-victor_41.jpg',
  },
  {
    slug: 'karen',
    nome: 'Karen',
    cargo: 'Professora de Violino',
    foto: 'https://institutoabda.com.br/uploads/2020/04/professores_karen_3.jpeg',
  },
  {
    slug: 'matilde-santos',
    nome: 'Matilde Santos',
    cargo: 'Professora de Crochê',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_matilde-santos_18.jpg',
  },
  {
    slug: 'teresinha-silva',
    nome: 'Teresinha Silva',
    cargo: 'Professora de Crochê',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_teresinha-silva_22.jpg',
  },

  // ── DIRETORIA VIGENTE ─────────────────────────────────────
  {
    slug: 'aroldo-soares',
    nome: 'Aroldo Soares',
    cargo: 'Conselheiro Fiscal',
    foto: 'https://institutoabda.com.br/uploads/2022/06/time_aroldo-soares_44.jpg',
  },
  {
    slug: 'caroline-raquel',
    nome: 'Caroline Raquel',
    cargo: 'Gestora de projetos',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_caroline-raquel_23.jpg',
  },
  {
    slug: 'claudia-bueno',
    nome: 'Claudia Bueno',
    cargo: 'Conselheira Fiscal',
    foto: 'https://institutoabda.com.br/uploads/2022/06/time_claudia-bueno_43.jpg',
  },
  {
    slug: 'elias-santos',
    nome: 'Elias Santos',
    cargo: 'Presidente',
    foto: 'https://institutoabda.com.br/uploads/2022/07/time_elias-santos_48.jpg',
  },
  {
    slug: 'hildebrando-santos',
    nome: 'Hildebrando Santos',
    cargo: 'Conselheiro Fiscal',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_hildebrando-santos_30.jpg',
  },
  {
    slug: 'liliane-santos',
    nome: 'Liliane Santos',
    cargo: 'Conselheira administrativa',
    foto: 'https://institutoabda.com.br/uploads/2022/06/time_liliane-santos_13.jpg',
  },
  {
    slug: 'mauro-rangel',
    nome: 'Mauro Rangel',
    cargo: 'Conselheiro administrativo',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_mauro-rangel_37.jpg',
  },
  {
    slug: 'paulo-gusmao',
    nome: 'Paulo Gusmão',
    cargo: 'Diretor financeiro',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_paulo-gusmao_19.jpg',
  },
  {
    slug: 'ronaldo-silva',
    nome: 'Ronaldo Silva',
    cargo: 'Secretário Geral',
    foto: 'https://institutoabda.com.br/uploads/2022/06/time_ronaldo-silva_42.jpg',
  },

  // ── SECRETARIA ────────────────────────────────────────────
  {
    slug: 'lidia-santos',
    nome: 'Lidia Santos',
    cargo: 'Secretaria',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_lidia-santos_25.jpg',
  },

  // ── COLABORADORES VOLUNTÁRIOS ─────────────────────────────
  {
    slug: 'acbor-braga',
    nome: 'Acbor Braga',
    cargo: 'Colaborador Voluntário',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_acbor-braga_38.jpg',
  },
  {
    slug: 'carla-barboza',
    nome: 'Carla Barboza',
    cargo: 'Colaboradora Voluntária',
    foto: 'https://institutoabda.com.br/uploads/2021/09/time_carla-barboza_39.jpg',
  },
  {
    slug: 'karen-crippa',
    nome: 'Karen Crippa',
    cargo: 'Colaboradora Voluntária',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_karen-crippa_16.jpg',
  },
  {
    slug: 'marta-magalhaes',
    nome: 'Marta Magalhães',
    cargo: 'Colaboradora Voluntária',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_marta-magalhaes_14.jpg',
  },
  {
    slug: 'mirian-rabello',
    nome: 'Mirian Rabello',
    cargo: 'Colaboradora Voluntária',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_mirian-rabello_26.jpg',
  },
  {
    slug: 'raphael-portugal',
    nome: 'Raphael Portugal',
    cargo: 'Colaborador Voluntário',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_raphael-portugal_24.jpg',
  },
  {
    slug: 'regina-santos',
    nome: 'Regina Santos',
    cargo: 'Colaboradora Voluntária',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_regina-santos_20.jpg',
  },
  {
    slug: 'rogerio-valadao',
    nome: 'Rogerio Valadão',
    cargo: 'Atendimento Psicológico',
    foto: 'https://institutoabda.com.br/uploads/2022/06/time_rogerio-valadao_40.jpg',
  },
  {
    slug: 'vanuzia-luz',
    nome: 'Vanuzia Luz',
    cargo: 'Colaboradora Voluntária',
    foto: 'https://institutoabda.com.br/uploads/2021/08/time_vanuzia-luz_36.JPG',
  },
];

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterLink, Footer],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil implements OnInit {

  membro: Membro | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.membro = TODOS_MEMBROS.find(m => m.slug === slug);
  }
}