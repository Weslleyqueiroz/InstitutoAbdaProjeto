import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';

interface Membro {
  nome: string;
  cargo: string;
  foto: string;
  link: string;
}

@Component({
  selector: 'app-nosso-time',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, Footer],
  templateUrl: './nosso-time.html',
  styleUrls: ['./nosso-time.css']
})
export class NossoTime {

  professores: Membro[] = [
    {
      nome: 'Carol Aragão',
      cargo: 'Professora de Espanhol',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_carol-aragao_28.jpg',
      link: '/nosso-time/perfil/carol-aragao'
    },
    {
      nome: 'Joaquim Pereira',
      cargo: 'Professor de Violino',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_joaquim-pereira_15.jpg',
      link: '/nosso-time/perfil/joaquim-pereira'
    },
    {
      nome: 'João Victor',
      cargo: 'Professor da Fanfarra',
      foto: 'https://institutoabda.com.br/uploads/2022/06/time_joao-victor_41.jpg',
      link: '/nosso-time/perfil/joao-victor'
    },
    {
      nome: 'Karen',
      cargo: 'Professora de Violino',
      foto: 'https://institutoabda.com.br/uploads/2020/04/professores_karen_3.jpeg',
      link: '/nosso-time/perfil/karen'
    },
    {
      nome: 'Matilde Santos',
      cargo: 'Professora de Crochê',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_matilde-santos_18.jpg',
      link: '/nosso-time/perfil/matilde-santos'
    },
    {
      nome: 'Teresinha Silva',
      cargo: 'Professora de Crochê',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_teresinha-silva_22.jpg',
      link: '/nosso-time/perfil/teresinha-silva'
    }
  ];

  diretoria: Membro[] = [
    {
      nome: 'Aroldo Soares',
      cargo: 'Conselheiro Fiscal',
      foto: 'https://institutoabda.com.br/uploads/2022/06/time_aroldo-soares_44.jpg',
      link: '/nosso-time/perfil/aroldo-soares'
    },
    {
      nome: 'Caroline Raquel',
      cargo: 'Gestora de projetos',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_caroline-raquel_23.jpg',
      link: '/nosso-time/perfil/caroline-raquel'
    },
    {
      nome: 'Claudia Bueno',
      cargo: 'Conselheira Fiscal',
      foto: 'https://institutoabda.com.br/uploads/2022/06/time_claudia-bueno_43.jpg',
      link: '/nosso-time/perfil/claudia-bueno'
    },
    {
      nome: 'Elias Santos',
      cargo: 'Presidente',
      foto: 'https://institutoabda.com.br/uploads/2022/07/time_elias-santos_48.jpg',
      link: '/nosso-time/perfil/elias-santos'
    },
    {
      nome: 'Hildebrando Santos',
      cargo: 'Conselheiro Fiscal',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_hildebrando-santos_30.jpg',
      link: '/nosso-time/perfil/hildebrando-santos'
    },
    {
      nome: 'Liliane Santos',
      cargo: 'Conselheira administrativa',
      foto: 'https://institutoabda.com.br/uploads/2022/06/time_liliane-santos_13.jpg',
      link: '/nosso-time/perfil/liliane-santos'
    },
    {
      nome: 'Mauro Rangel',
      cargo: 'Conselheiro administrativo',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_mauro-rangel_37.jpg',
      link: '/nosso-time/perfil/mauro-rangel'
    },
    {
      nome: 'Paulo Gusmão',
      cargo: 'Diretor financeiro',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_paulo-gusmao_19.jpg',
      link: '/nosso-time/perfil/paulo-gusmao'
    },
    {
      nome: 'Ronaldo Silva',
      cargo: 'Secretário Geral',
      foto: 'https://institutoabda.com.br/uploads/2022/06/time_ronaldo-silva_42.jpg',
      link: '/nosso-time/perfil/ronaldo-silva'
    }
  ];

  secretaria: Membro[] = [
    {
      nome: 'Lidia Santos',
      cargo: 'Secretaria',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_lidia-santos_25.jpg',
      link: '/nosso-time/perfil/lidia-santos'
    }
  ];

  colaboradores: Membro[] = [
    {
      nome: 'Acbor Braga',
      cargo: 'Colaborador Voluntário',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_acbor-braga_38.jpg',
      link: '/nosso-time/perfil/acbor-braga'
    },
    {
      nome: 'Carla Barboza',
      cargo: 'Colaboradora Voluntária',
      foto: 'https://institutoabda.com.br/uploads/2021/09/time_carla-barboza_39.jpg',
      link: '/nosso-time/perfil/carla-barboza'
    },
    {
      nome: 'Carol Aragão',
      cargo: 'Professora de Espanhol',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_carol-aragao_28.jpg',
      link: '/nosso-time/perfil/carol-aragao'
    },
    {
      nome: 'Joaquim Pereira',
      cargo: 'Professor de Violino',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_joaquim-pereira_15.jpg',
      link: '/nosso-time/perfil/joaquim-pereira'
    },
    {
      nome: 'Karen Crippa',
      cargo: 'Colaboradora Voluntária',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_karen-crippa_16.jpg',
      link: '/nosso-time/perfil/karen-crippa'
    },
    {
      nome: 'Marta Magalhães',
      cargo: 'Colaboradora Voluntária',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_marta-magalhaes_14.jpg',
      link: '/nosso-time/perfil/marta-magalhaes'
    },
    {
      nome: 'Matilde Santos',
      cargo: 'Professora de Crochê',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_matilde-santos_18.jpg',
      link: '/nosso-time/perfil/matilde-santos'
    },
    {
      nome: 'Mirian Rabello',
      cargo: 'Colaboradora Voluntária',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_mirian-rabello_26.jpg',
      link: '/nosso-time/perfil/mirian-rabello'
    },
    {
      nome: 'Raphael Portugal',
      cargo: 'Colaborador Voluntário',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_raphael-portugal_24.jpg',
      link: '/nosso-time/perfil/raphael-portugal'
    },
    {
      nome: 'Regina Santos',
      cargo: 'Colaboradora Voluntária',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_regina-santos_20.jpg',
      link: '/nosso-time/perfil/regina-santos'
    },
    {
      nome: 'Rogerio Valadão',
      cargo: 'Atendimento Psicológico',
      foto: 'https://institutoabda.com.br/uploads/2022/06/time_rogerio-valadao_40.jpg',
      link: '/nosso-time/perfil/rogerio-valadao'
    },
    {
      nome: 'Teresinha Silva',
      cargo: 'Professora de Crochê',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_teresinha-silva_22.jpg',
      link: '/nosso-time/perfil/teresinha-silva'
    },
    {
      nome: 'Vanuzia Luz',
      cargo: 'Colaboradora Voluntária',
      foto: 'https://institutoabda.com.br/uploads/2021/08/time_vanuzia-luz_36.JPG',
      link: '/nosso-time/perfil/vanuzia-luz'
    }
  ];
}