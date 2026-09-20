import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Veiculo } from '../../models/veiculo';

@Component({
  imports: [],
  selector: 'app-vehicle-details',
  styleUrl: './vehicle-details.css',
  templateUrl: './vehicle-details.html',
})
export class VehicleDetails {
  // Recebe os dados do veículo selecionado para exibir informações completas
  @Input() veiculo!: Veiculo;

  // Emite um evento notificando o componente pai para fechar os detalhes
  @Output() fechar = new EventEmitter<void>();

  // Dispara o fechamento do painel de detalhes
  fecharDetalhes(): void {
    this.fechar.emit();
  }
}
