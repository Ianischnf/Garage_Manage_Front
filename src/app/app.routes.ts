import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { AddCar } from './features/add-car/add-car';
import { AddMoto } from './features/add-moto/add-moto';
import { Vehicules } from './features/vehicules/vehicules';

export const routes: Routes = [
    {path : '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: Home},
    {path: 'vehicules', component: Vehicules},
    {path: 'add-car', component: AddCar},
    {path: 'add-moto', component: AddMoto}
];
