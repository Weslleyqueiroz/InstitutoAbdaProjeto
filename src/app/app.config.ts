import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Importações cruciais do AngularFire
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBaX6jVwR1LejsMmBozYdzjnWFMHNdQuNU",
  authDomain: "bdinstituto-51b0a.firebaseapp.com",
  projectId: "bdinstituto-51b0a",
  storageBucket: "bdinstituto-51b0a.firebasestorage.app",
  messagingSenderId: "799142936852",
  appId: "1:799142936852:web:9fb36249ebba304a900201",
  measurementId: "G-KF0WD709YV"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Estas duas linhas injetam o Firebase no projeto todo
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
};
