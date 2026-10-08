import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class VehiculeService {

    private apiURL = "http://localhost:8080/vehicules";

    constructor(private http: HttpClient) {}

    getVehicules(): Observable<any[]> {
        return this.http.get<any[]>(this.apiURL);
    }
}