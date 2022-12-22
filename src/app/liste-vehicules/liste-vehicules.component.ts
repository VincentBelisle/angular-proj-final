import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-liste-vehicules',
  templateUrl: './liste-vehicules.component.html',
  styleUrls: ['./liste-vehicules.component.css']
})
export class ListeVehiculesComponent implements OnInit {

  vehicules: Vehicule[] = [];

  constructor(private vehiculeService: VehiculeService) { }

  ngOnInit(): void {

    this.getVehicules();
  }

  getVehicules(): void {
    this.vehiculeService.vehicles$.subscribe(vehicles => {
      this.vehicules = vehicles;
    });

  }
}
