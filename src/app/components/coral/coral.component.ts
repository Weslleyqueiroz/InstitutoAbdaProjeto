import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';
import { Parceiros } from '../parceiros/parceiros';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-coral',
  standalone: true,
  imports: [Footer, RouterLink, Parceiros, Navbar],
  templateUrl: './coral.component.html',
  styleUrl: './coral.component.css',
})
export class CoralComponent {}