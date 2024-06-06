import { Component } from '@angular/core';
import { SidePanelComponent } from '../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../shared/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-surrounding-areas',
  standalone: true,
  templateUrl: './surrounding-areas.component.html',
  styleUrl: './surrounding-areas.component.scss',
  imports: [SidePanelComponent, ServicesComponent, RouterLink],
})
export class SurroundingAreasComponent {}
