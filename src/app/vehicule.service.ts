import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Vehicule } from './vehicule';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  vehiculesUrl = environment.apiUrl + '/vehicules';

  vehicles$: BehaviorSubject<Vehicule[]> = new BehaviorSubject<Vehicule[]>([]);


  constructor(private http: HttpClient) { }

  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(this.vehiculesUrl)
    .pipe(
      tap(vehicles => {
        this.vehicles$.next(vehicles);
      }
    ));


  }

  getVehiculeParId(_id: string): Observable<Vehicule> {
    const url = `${this.vehiculesUrl}/${_id}`;
    return this.http.get<Vehicule>(url)
  }


  ajoutVehicule(vehicule: Vehicule, token: string): Observable<Vehicule> {
    const headers = new HttpHeaders().set('x-access-token', token);

    console.log(vehicule.date_sortie);


    return this.http.post<Vehicule>(this.vehiculesUrl, vehicule, { headers })
    .pipe(
      tap(() => {
        // Ajoute le véhicule à la liste des véhicules
        const vehicles = this.vehicles$.value;
        vehicles.push(vehicule);
        this.vehicles$.next(vehicles);
      })
    );



  }
  
  supprimerVehicule(_id : string, token:string): Observable<Vehicule> {
    const url = `${this.vehiculesUrl}/${_id}`;
    const headers = new HttpHeaders().set('x-access-token', token);

    return this.http.delete<Vehicule>(url, {headers}).pipe
    (
      tap(() => {
        // Supprime le véhicule de la liste des véhicules
        const vehicles = this.vehicles$.value;
        const index = vehicles.findIndex(vehicule => vehicule._id === _id);
        vehicles.splice(index, 1);
        this.vehicles$.next(vehicles);
        console.log(this.vehicles$);
        
      })
    );
  }

  modifierVehicule(_id: string,vehicule: Vehicule, token: string): Observable<Vehicule> {
    const url = `${this.vehiculesUrl}/${_id}`;
    const headers = new HttpHeaders().set('x-access-token', token);
    return this.http.put<Vehicule>(url, vehicule, { headers })
    .pipe(
      tap(() => {
        // Modifie le véhicule de la liste des véhicules
        const vehicles = this.vehicles$.value;
        const index = vehicles.findIndex(vehicule => vehicule._id === _id);
        vehicles[index] = vehicule;
        this.vehicles$.next(vehicles);
        
      })
    );
  }

  getVehiculesParModele(modele: string): Observable<Vehicule[]> {
    const url = `${this.vehiculesUrl}/modele/${modele}`;
    return this.http.get<Vehicule[]>(url)
  }

  getVehiculesParFabricant(fabricant: string): Observable<Vehicule[]> {
    const url = `${this.vehiculesUrl}/fabricant/${fabricant}`;
    return this.http.get<Vehicule[]>(url)
  }
  getVehiculesParType(type: string): Observable<Vehicule[]> {
    const url = `${this.vehiculesUrl}/type/${type}`;
    return this.http.get<Vehicule[]>(url)
  }
  getVehiculesParEntrainement(entrainement: string): Observable<Vehicule[]> {
    const url = `${this.vehiculesUrl}/entrainement/${entrainement}`;
    return this.http.get<Vehicule[]>(url)
  }

  

}
