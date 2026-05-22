import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-sobre',
  imports: [Footer, RouterLink, Navbar],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
  standalone: true,
})
export class Sobre {}