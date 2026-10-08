import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../../services/vehicule.service';
import { NavbarComponent } from '../../component/navbar-component/navbar-component';

@Component({
  selector: 'app-vehicules',
  imports: [NavbarComponent],
  templateUrl: './vehicules.html',
  styleUrl: './vehicules.css',
})
export class Vehicules implements OnInit{

  constructor( private vehiculeService : VehiculeService){}

  vehicules: any[] = [];

  ngOnInit(){
      this.vehiculeService.getVehicules().subscribe({
        next: (data) => {
          this.vehicules = data;
          console.log("Vehicules : ", data);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

}
