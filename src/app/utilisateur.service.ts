import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  utilisateursUrl = environment.apiUrl + '/utilisateurs';

  constructor(private http: HttpClient) { }

  connexionUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.utilisateursUrl + '/connexion', utilisateur, httpOptions);
  }

}
