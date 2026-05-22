import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule],
  templateUrl: './registros.html',
  styleUrl: './registros.css',
})
export class Registros {
  documentos = [
    { titulo: 'Título CMDCA', descricao: 'Conselho Municipal dos Direitos da Criança e do Adolescente', url: 'https://institutoabda.com.br/uploads/2022/03/registros_T%C3%ADtulo%20CMDCA_1.pdf' },
    { titulo: 'Relatório de Entidade Certificada', descricao: 'Relatório oficial de certificação da entidade', url: 'https://institutoabda.com.br/uploads/2021/07/registros_Relat%C3%B3rio%20de%20Entidade%20Certificada_2.pdf' },
    { titulo: 'IOMO - Título de Utilidade Pública', descricao: 'Título de Utilidade Pública Municipal', url: 'https://institutoabda.com.br/uploads/2022/04/registros_IOMO%20-%20T%C3%ADtulo%20de%20Utilidade%20P%C3%BAblica_5.pdf' },
    { titulo: 'DOE', descricao: 'Diário Oficial do Estado', url: 'https://institutoabda.com.br/uploads/2022/04/registros_DOE_7.pdf' },
    { titulo: 'CRIC', descricao: 'Cadastro de Registro de Inscrição Civil', url: 'https://institutoabda.com.br/uploads/2022/04/registros_CRIC_6.pdf' },
    { titulo: 'CRCE', descricao: 'Certificado de Registro no Conselho Estadual', url: 'https://institutoabda.com.br/uploads/2021/07/registros_CRCE_3.pdf' },
    { titulo: 'CMAS', descricao: 'Conselho Municipal de Assistência Social', url: 'https://institutoabda.com.br/uploads/2024/07/registros_CMAS_8.pdf' },
    { titulo: 'Certidão CMAS', descricao: 'Certidão do Conselho Municipal de Assistência Social', url: 'https://institutoabda.com.br/uploads/2022/01/registros_CERTID%C3%83O%20CMAS_4.pdf' },
  ];
}