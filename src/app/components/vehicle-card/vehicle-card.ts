import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Veiculo } from '../../models/veiculo';

@Component({
  imports: [],
  selector: 'app-vehicle-card',
  styleUrl: './vehicle-card.css',
  templateUrl: './vehicle-card.html',
})
export class VehicleCard {
  // Recebe os dados do veículo vindos do componente pai
  @Input() veiculo!: Veiculo;

  // Emite o veículo selecionado de volta ao componente pai
  @Output() verDetalhes = new EventEmitter<Veiculo>();

  // Dispara a emissão do evento ao clicar no botão de detalhes
  selecionarVeiculo(): void {
    this.verDetalhes.emit(this.veiculo);
  }
}
