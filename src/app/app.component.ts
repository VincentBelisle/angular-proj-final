import { Component } from '@angular/core';
import { Vehicule } from './vehicule';
import { VehiculeService } from './vehicule.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-final';

  vehicules: Vehicule[] = [];

  constructor(private vehiculeService: VehiculeService, private titleService: Title) { 

    this.titleService.setTitle($localize`${this.title}`);

  }
  

  ngOnInit(): void {
    this.getVehicules();
  }

  getVehicules(): void {
    this.vehiculeService.getVehicules()
      .subscribe(vehicules => this.vehicules = vehicules);
  }

}
