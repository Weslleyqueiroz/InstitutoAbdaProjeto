import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-sobre',
  imports: [Footer],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
  standalone: true,
})
export class Sobre {}
