import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [Footer, RouterLink, Navbar, CommonModule],
  templateUrl: './transparencia.html',
  styleUrl: './transparencia.css',
})
export class Transparencia {
  relatorios = [
    { titulo: 'DRE 2025', ano: '2025', tipo: 'DRE', url: 'https://institutoabda.com.br/uploads/2026/03/transparencia_DRE_2025_23.pdf' },
    { titulo: 'Balanço 2025', ano: '2025', tipo: 'Balanço', url: 'https://institutoabda.com.br/uploads/2026/03/transparencia_Balan%C3%A7o_2025_22.pdf' },
    { titulo: 'Balanço 2024', ano: '2024', tipo: 'Balanço', url: 'https://institutoabda.com.br/uploads/2026/03/transparencia_Balan%C3%A7o_2024_20.pdf' },
    { titulo: 'DRE 2024', ano: '2024', tipo: 'DRE', url: 'https://institutoabda.com.br/uploads/2026/03/transparencia_DRE_2024_16.pdf' },
    { titulo: 'Prestação de Contas 2026', ano: '2026', tipo: 'Prestação', url: 'https://institutoabda.com.br/uploads/2026/03/transparencia_Balan%C3%A7o_2026_15.pdf' },
    { titulo: 'DRE 2023', ano: '2023', tipo: 'DRE', url: 'https://institutoabda.com.br/uploads/2024/07/transparencia_Balan%C3%A7o_2023_14.pdf' },
    { titulo: 'Balanço 2023', ano: '2023', tipo: 'Balanço', url: 'https://institutoabda.com.br/uploads/2024/07/transparencia_Balan%C3%A7o_2023_13.pdf' },
    { titulo: 'Balancete 2022', ano: '2022', tipo: 'Balancete', url: 'https://institutoabda.com.br/uploads/2024/07/transparencia_Balan%C3%A7o_2022_12.pdf' },
    { titulo: 'DRE 2022', ano: '2022', tipo: 'DRE', url: 'https://institutoabda.com.br/uploads/2024/07/transparencia_Balan%C3%A7o_2022_11.pdf' },
    { titulo: 'DRE 2021', ano: '2021', tipo: 'DRE', url: 'https://institutoabda.com.br/uploads/2022/03/transparencia_DRE_2022_9.pdf' },
    { titulo: 'Balanço 2021', ano: '2021', tipo: 'Balanço', url: 'https://institutoabda.com.br/uploads/2022/03/transparencia_Balan%C3%A7o_2022_8.pdf' },
    { titulo: 'DRE 2020', ano: '2020', tipo: 'DRE', url: 'https://institutoabda.com.br/uploads/2021/07/transparencia_DRE_2020_7.pdf' },
    { titulo: 'Balanço 2020', ano: '2020', tipo: 'Balanço', url: 'https://institutoabda.com.br/uploads/2021/07/transparencia_Balan%C3%A7o_2020_3.pdf' },
    { titulo: 'DRE 2019', ano: '2019', tipo: 'DRE', url: 'https://institutoabda.com.br/uploads/2021/07/transparencia_DRE_2019_2.pdf' },
    { titulo: 'Balanço 2019', ano: '2019', tipo: 'Balanço', url: 'https://institutoabda.com.br/uploads/2021/07/transparencia_Balan%C3%A7o_2019_1.pdf' },
  ];

  getCor(tipo: string): string {
    if (tipo === 'DRE') return 'tag-dre';
    if (tipo === 'Balanço') return 'tag-balanco';
    if (tipo === 'Balancete') return 'tag-balancete';
    return 'tag-prestacao';
  }
}