import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-liste-vehicules-type',
  templateUrl: './liste-vehicules-type.component.html',
  styleUrls: ['./liste-vehicules-type.component.css']
})
export class ListeVehiculesTypeComponent implements OnInit {

  vehicules: Vehicule[] = [];

  types: string[] = ['VUS', 'Coupe', 'Familiale'];

  entrainements: string[] = ['propulsion arrière', 'traction avant', 'traction intégrale', '4 roues motrices'];

  entrainementSelected: string = 'o';

  fabricant : string = '';

  typeSelected: string = 'o';

  token : string = '';



  constructor(private vehiculeService: VehiculeService) { }


  ngOnInit(): void {
      
      this.token = localStorage.getItem('token') || '';
  
  }

  getVehiculesParType(type: string): void {

    this.entrainementSelected = 'o';
    this.fabricant = '';


    this.vehiculeService.getVehiculesParType(type)
      .subscribe(vehicules => this.vehicules = vehicules);
  }

  getVehiculesParEntrainement(entrainement: string): void {

    this.fabricant = '';
    this.typeSelected = 'o';


    this.vehiculeService.getVehiculesParEntrainement(entrainement)
      .subscribe(vehicules => this.vehicules = vehicules);
  }

  getVehiculesParFabricant(fabricant: string): void {

    this.entrainementSelected = 'o';
    this.typeSelected = 'o';


    this.vehiculeService.getVehiculesParFabricant(fabricant)
    .subscribe(vehicules => this.vehicules = vehicules);
  }

  deleteVehicle(_id?: string): void {

    console.log(this.token);

    if (!_id) return;
    this.vehicules = this.vehicules.filter(v => v._id !== _id);
    this.vehiculeService.supprimerVehicule(_id,this.token).subscribe();
  }
   

}
