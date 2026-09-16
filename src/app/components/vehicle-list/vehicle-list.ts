import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VehicleCard } from '../vehicle-card/vehicle-card';
import { Veiculo } from '../../models/veiculo';

@Component({
  imports: [CommonModule, VehicleCard],
  selector: 'app-vehicle-list',
  styleUrl: './vehicle-list.css',
  templateUrl: './vehicle-list.html',
})
export class VehicleList {
  veiculos: Veiculo[] = [
    {
      marca: 'Mitsubishi',
      modelo: 'Lancer Evolution X',
      preco: 149900,
      combustivel: 'Gasolina',
      imagem: '/images/Mitsubishi_Lancer Evolution X.jpg',
      disponibilidade: true,
    },
    {
      marca: 'Mitsubishi',
      modelo: 'Lancer GT 2.0',
      preco: 89900,
      combustivel: 'Flex',
      imagem: '/images/Mitsubishi_Lancer GT  2.0 (Geração X).jpg',
      disponibilidade: true,
    },
    {
      marca: 'Mitsubishi',
      modelo: 'Lancer Sedan',
      preco: 75900,
      combustivel: 'Flex',
      imagem: '/images/Mitsubishi_Lancer Sedan (Geração X).jpg',
      disponibilidade: false,
    },
    {
      marca: 'Mitsubishi',
      modelo: 'Lancer GT HL',
      preco: 82900,
      combustivel: 'Gasolina',
      imagem: '/images/Mitsubishi_Lancer GT  HL (Geração X).jpg',
      disponibilidade: true,
    },
  ];
}
