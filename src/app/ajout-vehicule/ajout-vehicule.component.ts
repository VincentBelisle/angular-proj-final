import { Component, Input, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-ajout-vehicule',
  templateUrl: './ajout-vehicule.component.html',
  styleUrls: ['./ajout-vehicule.component.css']
})
export class AjoutVehiculeComponent implements OnInit {

  token: string = '';

  showForm: boolean = false;

  showConnexion: boolean = true;


  newVehicle: Vehicule = {
    modele: '',
    poids: 0,
    type_vehicule: '',
    date_sortie: new Date(),
    fabricant: '',
    entrainement: '',
    chevaux: 0,
    consommation_moyenne: 0,
    nombre_cylindres: 0,
    discontinue: false,
    transmission_disponible: [],

  };

  types = ['VUS', 'Coupe', 'Familiale'];

  transmissions = ['automatique', 'manuelle', 'séquentielle'];

  drives = ['propulsion arrière', 'traction avant', 'traction intégrale', '4 roues motrices'];

  constructor(private vehiculeService: VehiculeService) { 

  }


  ngOnInit(): void {
    this.token = localStorage.getItem('token') || '';

    // a chaque 30 minutes, on supprime le token et rafraichit la page
    setInterval(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenTime');
      window.location.reload();
    }, 1800000);

    if (this.token !== '') {
      this.showForm = true;
      this.showConnexion = false;
    }
  }

  ajoutVehicule(): void {


    this.vehiculeService.ajoutVehicule(this.newVehicle, this.token)
      .subscribe(vehicule => {

        console.log(vehicule);
      }
      );

    this.newVehicle = {
      modele: '',
      poids: 0,
      type_vehicule: '',
      date_sortie: new Date(),
      fabricant: '',
      entrainement: '',
      chevaux: 0,
      consommation_moyenne: 0,
      nombre_cylindres: 0,
      discontinue: false,
      transmission_disponible: []
    }
  }
}
