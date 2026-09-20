import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Veiculo } from '../../models/veiculo';

@Component({
  imports: [],
  selector: 'app-vehicle-details',
  styleUrl: './vehicle-details.css',
  templateUrl: './vehicle-details.html',
})
export class VehicleDetails {
  @Input() veiculo!: Veiculo;
  @Output() fechar = new EventEmitter<void>();

  fecharDetalhes(): void {
    this.fechar.emit();
  }
}
