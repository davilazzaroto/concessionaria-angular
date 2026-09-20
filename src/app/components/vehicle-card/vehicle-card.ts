import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Veiculo } from '../../models/veiculo';

@Component({
  imports: [],
  selector: 'app-vehicle-card',
  styleUrl: './vehicle-card.css',
  templateUrl: './vehicle-card.html',
})
export class VehicleCard {
  @Input() veiculo!: Veiculo;
  @Output() verDetalhes = new EventEmitter<Veiculo>();

  selecionarVeiculo(): void {
    this.verDetalhes.emit(this.veiculo);
  }
}
