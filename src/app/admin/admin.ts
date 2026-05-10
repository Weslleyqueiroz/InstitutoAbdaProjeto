import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // 1. Adicione este import
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminComponent {

  constructor(private firestore: Firestore) {}

  async exportarParaCSV() {
    try {
      const usuariosRef = collection(this.firestore, 'usuarios');
      const snapshot = await getDocs(usuariosRef);
      const dados = snapshot.docs.map(doc => doc.data());

      if (dados.length === 0) {
        alert('Nenhum usuário cadastrado para exportar.');
        return;
      }

      const cabecalhos = ['Nome', 'Sobrenome', 'Email'];
      const linhas = dados.map((user: any)  =>
        `"${user.nome}","${user.sobrenome}","${user.email}"`
      );

      const conteudoCSV = "\ufeff" + [cabecalhos.join(','), ...linhas].join('\n');
      const blob = new Blob([conteudoCSV], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.setAttribute('href', url);
      link.setAttribute('download', 'lista_usuarios_abda.csv');
      link.click();
    } catch (error) {
      console.error('Erro ao exportar:', error);
      alert('Erro ao gerar relatório.');
    }
  }
}
