import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) { }

  utilisateur: Utilisateur = {
    email: '',
    password: ''
  };

  token: string = '';

  showDeconnexion: boolean = false;

  showForm: boolean = false;

  ngOnInit(): void {

    this.token = localStorage.getItem('token') || '';

    // a chaque 30 minutes, on supprime le token et rafraichit la page
    setInterval(() => {
      localStorage.removeItem('token');
      window.location.reload();
    }, 1800000);

    if (this.token == '') {
      this.showForm = true;
    }
    else {
      this.showDeconnexion = true;
    }

  }

  connexion(): void {
    this.utilisateurService.connexionUtilisateur(this.utilisateur)
      .subscribe((utilisateur: any) => {

        if (utilisateur.token) {
          this.token = utilisateur.token;
          // ajouter le token dans le local storage
          localStorage.setItem('token', this.token);

          this.showForm = false;

          window.location.reload();

          // attendre 2 secondes avant d'afficher le bouton deconnexion
          setTimeout(() => {
            this.showDeconnexion = true;
          }
            , 2000);
        }

      }
      );

  }
  deconnexion(): void {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
