export interface Vehicule {
    _id?: string;
    poids: number;
    date_sortie: Date;
    modele: string;    
    fabricant: string;
    entrainement: string;
    chevaux: number;
    consommation_moyenne: number;
    type_vehicule: string;
    nombre_cylindres: number;
    discontinue: boolean;
    transmission_disponible: TransmissionDisponible[];
}

export enum TransmissionDisponible {
    Automatique = 'Automatique',
    Manuelle = 'Manuelle',
    Sequentielle = 'Sequentielle',
}
    
