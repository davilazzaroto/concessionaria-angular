import { Component } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { VehicleList } from './components/vehicle-list/vehicle-list';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, VehicleList, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
