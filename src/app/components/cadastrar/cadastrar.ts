import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css',
})
export class Cadastrar {
  usuario = { nome: '', sobrenome: '', email: '', senha: '' };

  constructor(
  private firestore: Firestore,
  private router: Router

) {}

 async cadastrar() {
  try {
    console.log('Salvando no Firebase...', this.usuario);

    const usuariosRef = collection(this.firestore, 'usuarios');
    await addDoc(usuariosRef, this.usuario);

    alert('Usuário cadastrado no Firebase com sucesso!');

    this.router.navigate(['/home']);

  } catch (error) {
    console.error('Erro ao salvar no Firebase:', error);
    alert('Erro ao cadastrar.');
  }
}
}
