import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';

@Component({
  selector: 'app-energy-efficient',
  standalone: true,
  imports: [SidePanelComponent, ServicesComponent],
  templateUrl: './energy-efficient.component.html',
  styleUrl: './energy-efficient.component.scss'
})
export class EnergyEfficientComponent {

}
