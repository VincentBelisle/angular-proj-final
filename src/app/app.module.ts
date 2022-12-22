import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeVehiculesComponent } from './liste-vehicules/liste-vehicules.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { VehiculeService } from './vehicule.service';
import { ListeVehiculesTypeComponent } from './liste-vehicules-type/liste-vehicules-type.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AjoutVehiculeComponent } from './ajout-vehicule/ajout-vehicule.component';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConnexionComponent } from './connexion/connexion.component';
import {MatIconModule} from '@angular/material/icon';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import {MatSortModule} from '@angular/material/sort';
import { ModifierVehiculeComponent } from './modifier-vehicule/modifier-vehicule.component';









@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    TabsComponent,
    ListeVehiculesComponent,
    ListeVehiculesTypeComponent,
    AjoutVehiculeComponent,
    ConnexionComponent,
    StatistiquesComponent,
    ModifierVehiculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [VehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
