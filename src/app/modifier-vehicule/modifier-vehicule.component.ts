import { Component, Input, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculeService } from '../vehicule.service';


@Component({
  selector: 'app-modifier-vehicule',
  templateUrl: './modifier-vehicule.component.html',
  styleUrls: ['./modifier-vehicule.component.css']
})
export class ModifierVehiculeComponent implements OnInit {

  vehicules: Vehicule[] = [];


  token: string = '';

  idVehicle: string = '';

  showForm: boolean = false;

  showConnexion: boolean = true;


  newVehicle: Vehicule = {
    _id : '',
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

  }

  types = ['VUS', 'Coupe', 'Familiale'];

  transmissions = ['automatique', 'manuelle', 'séquentielle'];

  drives = ['propulsion arrière', 'traction avant', 'traction intégrale', '4 roues motrices'];

  constructor(private vehiculeService: VehiculeService) { 

  }


  ngOnInit(): void {

    this.getVehicules();


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

  getVehicules(): void {
    this.vehiculeService.getVehicules()
      .subscribe(vehicles => {
        this.vehicules = vehicles;
      });
  }
  

  getVehiculeParId(): void {
    this.vehiculeService.getVehiculeParId(this.idVehicle)
      .subscribe(vehicule => {
        console.log(vehicule._id);
        this.newVehicle = vehicule;
      });

  }
  modifierVehicule(): void {
    console.log(this.newVehicle)
    this.vehiculeService.modifierVehicule(this.newVehicle._id as string,this.newVehicle, this.token)
      .subscribe(message => {
        console.log(message);
      });
  }


}

