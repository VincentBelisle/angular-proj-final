import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from '../statistiques.service';
import { ConsommationMoyenne } from '../consommation-moyenne';
import { Statistique } from '../statistique';
import { NombreVehicule } from '../nombre-vehicule';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  consommation: ConsommationMoyenne[] = [];

  nombreVehicules: NombreVehicule[] = [];

  statistiques: Statistique[] = [];



  ngOnInit(): void {

    this.getConsommationMoyenne();
    this.getNombreVehicules();



  }

  constructor(private statistiquesService: StatistiquesService) { }


  getConsommationMoyenne(): void {
    this.statistiquesService.getConsommationMoyenne()
      .subscribe(consommation => this.consommation = consommation)
  }

  getNombreVehicules(): void {
    this.statistiquesService.getNombreVehicules()
      .subscribe(
        data => {

          // Permet de récupérer les données de la requête getNombreVehicules
          // Ajoute la consommation moyenne dans le tableau statistiques 

          this.nombreVehicules = data;
          this.statistiques = this.nombreVehicules.map((item, i) => {
            // Vérifie que l'item._id de nombreVehicules est égal à l'item._id de consommation
            const consommation = this.consommation.find(cons => cons._id === item._id);
            return {
              _id: item._id,
              nombre_vehicules: item.nombre_vehicules,
              consommation_moyenne: consommation ? consommation.consommation_moyenne : 0
            }
          });


        }
      )
    console.log(this.statistiques);




  }

  rafraichirStatistiques(): void {
    this.getConsommationMoyenne();
    this.getNombreVehicules();
  }



  sortData(sort: Sort) {


    const data = this.statistiques.slice();

    if (!sort.active || sort.direction === '') {
      this.statistiques = data;
      return;
    }

    this.statistiques = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'consommation_moyenne':
          return compare(a.consommation_moyenne, b.consommation_moyenne, isAsc);
        case '_id':
          return compare(a._id, b._id, isAsc);
        case 'nombre_vehicules':
          return compare(a.nombre_vehicules, b.nombre_vehicules, isAsc);
        default: return 0;
      }
    });
  }



}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  if (typeof a === 'string' && typeof b === 'string') {

    return a.localeCompare(b) * (isAsc ? 1 : -1);
  } else {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}




