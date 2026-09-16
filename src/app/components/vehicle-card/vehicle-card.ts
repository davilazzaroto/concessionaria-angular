import { Component, Input } from '@angular/core';
import { Veiculo } from '../../models/veiculo';

@Component({
  imports: [],
  selector: 'app-vehicle-card',
  styleUrl: './vehicle-card.css',
  templateUrl: './vehicle-card.html',
})
export class VehicleCard {
  @Input() veiculo!: Veiculo;
}
