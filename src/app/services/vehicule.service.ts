import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment";


export interface VoitureRequestDTO {
    marque  : string,
    modele  : string,
    annee   : number,
    nbPorte : number
}

interface VoitureResponseDTO {
    id      : number,
    marque  : string,
    modele  : string,
    annee   : number,
    nbPorte : number
}

export interface MotoRequestDTO {
    marque      : string,
    modele      : string,
    annee       : number,
    cylindree   : number
}

interface MotoResponseDTO {
    id          : number,
    marque      : string,
    modele      : string,
    annee       : number,
    cylindree   : number
}

@Injectable({
  providedIn: 'root'
})


export class VehiculeService {


    private apiUrl = `${environment.apiUrl}/vehicules`;

    constructor(private http: HttpClient) { }

    getVehicules(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    ajouterVoiture(dto : VoitureRequestDTO): Observable<VoitureResponseDTO> {
        return this.http.post<VoitureResponseDTO>(`${this.apiUrl}/voiture`, dto)
    }

    ajouterMoto(dto : MotoRequestDTO): Observable<MotoResponseDTO> {
        return this.http.post<MotoResponseDTO>(`${this.apiUrl}/moto`, dto);
    }
}