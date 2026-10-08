import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar-component/navbar-component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
