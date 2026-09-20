import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VehicleCard } from '../vehicle-card/vehicle-card';
import { VehicleDetails } from '../vehicle-details/vehicle-details';
import { Veiculo } from '../../models/veiculo';

@Component({
  imports: [CommonModule, VehicleCard, VehicleDetails],
  selector: 'app-vehicle-list',
  styleUrl: './vehicle-list.css',
  templateUrl: './vehicle-list.html',
})
export class VehicleList {
  veiculoSelecionado: Veiculo | null = null;

  veiculos: Veiculo[] = [
    {
      marca: 'Mitsubishi',
      modelo: 'Lancer Evolution X',
      preco: 149900,
      combustivel: 'Gasolina',
      imagem: '/images/Mitsubishi_Lancer Evolution X.jpg',
      disponivel: true,
    },
    {
      marca: 'Mitsubishi',
      modelo: 'Lancer GT 2.0',
      preco: 89900,
      combustivel: 'Flex',
      imagem: '/images/Mitsubishi_Lancer GT  2.0 (Geração X).jpg',
      disponivel: true,
    },
    {
      marca: 'Mitsubishi',
      modelo: 'Lancer Sedan',
      preco: 75900,
      combustivel: 'Flex',
      imagem: '/images/Mitsubishi_Lancer Sedan (Geração X).jpg',
      disponivel: false,
    },
    {
      marca: 'Mitsubishi',
      modelo: 'Lancer GT HL',
      preco: 82900,
      combustivel: 'Gasolina',
      imagem: '/images/Mitsubishi_Lancer GT  HL (Geração X).jpg',
      disponivel: true,
    },
    {
      marca: 'Chevrolet',
      modelo: 'Onix Plus',
      preco: 92900,
      combustivel: 'Flex',
      imagem: '/images/Chevrolet_Onix_Plus.jpg',
      disponivel: true,
    },
    {
      marca: 'Volkswagen',
      modelo: 'Polo',
      preco: 87900,
      combustivel: 'Flex',
      imagem: '/images/Volkswagen_Polo..jpg',
      disponivel: true,
    },
    {
      marca: 'Hyundai',
      modelo: 'HB20',
      preco: 82900,
      combustivel: 'Flex',
      imagem: '/images/Hyundai_HB20..jpg',
      disponivel: true,
    },
    {
      marca: 'Fiat',
      modelo: 'Argo',
      preco: 74900,
      combustivel: 'Flex',
      imagem: '/images/Fiat_Argo..jpg',
      disponivel: false,
    },
  ];

  selecionarVeiculo(veiculo: Veiculo): void {
    this.veiculoSelecionado = veiculo;
    setTimeout(() => {
      document.getElementById('detalhes')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  fecharDetalhes(): void {
    this.veiculoSelecionado = null;
  }
}
