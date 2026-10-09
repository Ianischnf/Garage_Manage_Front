import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MotoRequestDTO, VehiculeService } from '../../services/vehicule.service';
import { InputComponent } from '../../component/input-component/input-component';
import { VoitureRequestDTO } from '../../services/vehicule.service';
import { NavbarComponent } from '../../component/navbar-component/navbar-component';

@Component({
  selector: 'app-add-car',
  imports: [FormsModule, InputComponent, NavbarComponent],
  templateUrl: './add-car.html',
  styleUrl: './add-car.css',
})

export class AddCar {

  constructor(private vehiculeService: VehiculeService) { }



  typeVehicule: 'VOITURE' | 'MOTO' = 'VOITURE';
  marque = '';
  modele = '';
  annee = 0;
  nbPorte = 0;
  cylindree = 0;


  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.typeVehicule == 'VOITURE') {
        this.ajouterVoiture();
      } else {
        this.ajouterMoto();
      }

    }
  }

  ajouterVoiture() {

    const VoitureDTO: VoitureRequestDTO = {
      marque: this.marque,
      modele: this.modele,
      annee: this.annee,
      nbPorte: this.nbPorte
    };

    this.vehiculeService.ajouterVoiture(VoitureDTO).subscribe({
      next: (data) => {
        console.log("Véhicule ajouter avec succès !", data);
      },
      error: (error) => {
        console.log("")
      }
    })


  }

  ajouterMoto() {

    const MotoDTO: MotoRequestDTO = {
      marque: this.marque,
      modele: this.modele,
      annee: this.annee,
      cylindree: this.cylindree
    }


    this.vehiculeService.ajouterMoto(MotoDTO).subscribe({
      next: (data) => {
        console.log("Moto Ajouter avec succès", data);
      },
      error: (error) => {
        console.log("Erreur lors de l'ajout de la moto", error);
      }
    })

  }

}
