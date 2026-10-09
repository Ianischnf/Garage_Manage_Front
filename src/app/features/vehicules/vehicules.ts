import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VehiculeService } from '../../services/vehicule.service';
import { NavbarComponent } from '../../component/navbar-component/navbar-component';


@Component({
  selector: 'app-vehicules',
  imports: [NavbarComponent],
  templateUrl: './vehicules.html',
  styleUrl: './vehicules.css',
})
export class Vehicules implements OnInit{

  constructor( private vehiculeService : VehiculeService,
                private cdr: ChangeDetectorRef
  ){}

  vehicules: any[] = [];

  ngOnInit(){
      this.vehiculeService.getVehicules().subscribe({
        next: (data) => {
          this.vehicules = data;
          console.log("Vehicules : ", data);
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

}
